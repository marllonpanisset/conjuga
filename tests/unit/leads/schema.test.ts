import { describe, expect, it } from "vitest";

import { contactFieldLimits } from "@/lib/contact";
import {
  LeadValidationError,
  parseLeadInput,
  type LeadValidationErrorCode,
} from "@/lib/leads/schema";

function baseValidInput(): Record<string, unknown> {
  return {
    name: "Maria Silva",
    email: "maria@empresa.com.br",
    service: "sistemas-web",
    message:
      "Precisamos organizar o atendimento e acompanhar os pedidos em um só lugar.",
    consent: true,
  };
}

function expectLeadError(input: unknown, code: LeadValidationErrorCode): void {
  try {
    parseLeadInput(input);
  } catch (error) {
    expect(error).toBeInstanceOf(LeadValidationError);
    expect((error as LeadValidationError).code).toBe(code);
    return;
  }

  throw new Error(
    `Expected LeadValidationError ${code} but parseLeadInput did not throw.`,
  );
}

describe("parseLeadInput", () => {
  it("accepts a minimal valid input without optional fields", () => {
    const result = parseLeadInput(baseValidInput());

    expect(result).toEqual({
      name: "Maria Silva",
      company: undefined,
      email: "maria@empresa.com.br",
      phone: undefined,
      service: "sistemas-web",
      message:
        "Precisamos organizar o atendimento e acompanhar os pedidos em um só lugar.",
      consent: true,
    });
  });

  it("accepts a complete valid input with company and phone", () => {
    const result = parseLeadInput({
      ...baseValidInput(),
      company: "Empresa Exemplo LTDA",
      phone: "21987654321",
    });

    expect(result.company).toBe("Empresa Exemplo LTDA");
    expect(result.phone).toBe("21987654321");
  });

  it("accepts every whitelisted service, including nao-sei", () => {
    for (const service of [
      "sistemas-web",
      "automacoes",
      "presenca-digital",
      "nao-sei",
    ] as const) {
      const result = parseLeadInput({ ...baseValidInput(), service });

      expect(result.service).toBe(service);
    }
  });

  it("ignores unknown extra fields instead of rejecting them", () => {
    const result = parseLeadInput({
      ...baseValidInput(),
      website: "bot-value",
      extra: 123,
    });

    expect(result.name).toBe("Maria Silva");
  });

  it("rejects non-record bodies with INVALID_BODY", () => {
    for (const body of [null, undefined, "texto", 123, ["array"]]) {
      expectLeadError(body, "INVALID_BODY");
    }
  });

  it("rejects missing or non-string name with INVALID_NAME", () => {
    expectLeadError({ ...baseValidInput(), name: undefined }, "INVALID_NAME");
    expectLeadError({ ...baseValidInput(), name: 123 }, "INVALID_NAME");
    expectLeadError({ ...baseValidInput(), name: "" }, "INVALID_NAME");
    expectLeadError({ ...baseValidInput(), name: "   " }, "INVALID_NAME");
  });

  it("rejects missing or non-string email with INVALID_EMAIL", () => {
    expectLeadError({ ...baseValidInput(), email: undefined }, "INVALID_EMAIL");
    expectLeadError({ ...baseValidInput(), email: 123 }, "INVALID_EMAIL");
    expectLeadError({ ...baseValidInput(), email: "" }, "INVALID_EMAIL");
  });

  it("rejects malformed emails with INVALID_EMAIL", () => {
    for (const email of ["sem-arroba", "sem-ponto@exemplo", "a @b.com"]) {
      expectLeadError({ ...baseValidInput(), email }, "INVALID_EMAIL");
    }
  });

  it("rejects missing or non-string service with INVALID_SERVICE", () => {
    expectLeadError(
      { ...baseValidInput(), service: undefined },
      "INVALID_SERVICE",
    );
    expectLeadError({ ...baseValidInput(), service: 123 }, "INVALID_SERVICE");
    expectLeadError({ ...baseValidInput(), service: "" }, "INVALID_SERVICE");
  });

  it("rejects services outside the whitelist with INVALID_SERVICE", () => {
    expectLeadError(
      { ...baseValidInput(), service: "landing-pages" },
      "INVALID_SERVICE",
    );
  });

  it("rejects missing or non-string message with INVALID_MESSAGE", () => {
    expectLeadError(
      { ...baseValidInput(), message: undefined },
      "INVALID_MESSAGE",
    );
    expectLeadError({ ...baseValidInput(), message: 123 }, "INVALID_MESSAGE");
  });

  it("rejects non-string company and phone with their own codes", () => {
    expectLeadError(
      { ...baseValidInput(), company: 123 },
      "INVALID_COMPANY",
    );
    expectLeadError({ ...baseValidInput(), phone: 123 }, "INVALID_PHONE");
  });

  it("enforces the name length limit", () => {
    const valid = parseLeadInput({
      ...baseValidInput(),
      name: "a".repeat(contactFieldLimits.name),
    });
    expect(valid.name).toHaveLength(contactFieldLimits.name);

    expectLeadError(
      {
        ...baseValidInput(),
        name: "a".repeat(contactFieldLimits.name + 1),
      },
      "INVALID_NAME",
    );
  });

  it("enforces the company length limit", () => {
    const valid = parseLeadInput({
      ...baseValidInput(),
      company: "a".repeat(contactFieldLimits.company),
    });
    expect(valid.company).toHaveLength(contactFieldLimits.company);

    expectLeadError(
      {
        ...baseValidInput(),
        company: "a".repeat(contactFieldLimits.company + 1),
      },
      "INVALID_COMPANY",
    );
  });

  it("treats empty or blank company as absent", () => {
    expect(parseLeadInput({ ...baseValidInput(), company: "" }).company).toBe(
      undefined,
    );
    expect(
      parseLeadInput({ ...baseValidInput(), company: undefined }).company,
    ).toBe(undefined);
    expect(
      parseLeadInput({ ...baseValidInput(), company: "   " }).company,
    ).toBe(undefined);
  });

  it("enforces the email length limit", () => {
    const atSuffixLength = "@e.com".length;
    const validEmail =
      "a".repeat(contactFieldLimits.email - atSuffixLength) + "@e.com";
    expect(validEmail).toHaveLength(contactFieldLimits.email);

    const valid = parseLeadInput({ ...baseValidInput(), email: validEmail });
    expect(valid.email).toBe(validEmail);

    const tooLongEmail =
      "a".repeat(contactFieldLimits.email - atSuffixLength + 1) + "@e.com";
    expectLeadError(
      { ...baseValidInput(), email: tooLongEmail },
      "INVALID_EMAIL",
    );
  });

  it("enforces the phone length limit and treats blank as absent", () => {
    const valid = parseLeadInput({
      ...baseValidInput(),
      phone: "1".repeat(contactFieldLimits.phone),
    });
    expect(valid.phone).toHaveLength(contactFieldLimits.phone);

    expectLeadError(
      {
        ...baseValidInput(),
        phone: "1".repeat(contactFieldLimits.phone + 1),
      },
      "INVALID_PHONE",
    );
    expect(parseLeadInput({ ...baseValidInput(), phone: "" }).phone).toBe(
      undefined,
    );
    expect(parseLeadInput({ ...baseValidInput(), phone: "   " }).phone).toBe(
      undefined,
    );
  });

  it("does not require the client-side 10/11 digit phone rule", () => {
    const result = parseLeadInput({ ...baseValidInput(), phone: "123" });

    expect(result.phone).toBe("123");
  });

  it("enforces the service length limit", () => {
    expectLeadError(
      { ...baseValidInput(), service: "x".repeat(33) },
      "INVALID_SERVICE",
    );
  });

  it("enforces the minimum and maximum message length", () => {
    expectLeadError(
      { ...baseValidInput(), message: "a".repeat(9) },
      "INVALID_MESSAGE",
    );

    expect(
      parseLeadInput({ ...baseValidInput(), message: "a".repeat(10) }).message,
    ).toHaveLength(10);
    expect(
      parseLeadInput({
        ...baseValidInput(),
        message: "a".repeat(contactFieldLimits.message),
      }).message,
    ).toHaveLength(contactFieldLimits.message);
    expectLeadError(
      {
        ...baseValidInput(),
        message: "a".repeat(contactFieldLimits.message + 1),
      },
      "INVALID_MESSAGE",
    );
  });

  it("collapses single-line whitespace in the name", () => {
    const result = parseLeadInput({
      ...baseValidInput(),
      name: "  João\n\t Silva  ",
    });

    expect(result.name).toBe("João Silva");
  });

  it("normalizes email case and surrounding spaces", () => {
    const result = parseLeadInput({
      ...baseValidInput(),
      email: "  USER@Exemplo.COM  ",
    });

    expect(result.email).toBe("user@exemplo.com");
  });

  it("normalizes CRLF and lone CR in the message", () => {
    expect(
      parseLeadInput({
        ...baseValidInput(),
        message: "  Olá\r\nmundo com texto suficiente  ",
      }).message,
    ).toBe("Olá\nmundo com texto suficiente");
    expect(
      parseLeadInput({
        ...baseValidInput(),
        message: "Olá\rmundo com texto suficiente",
      }).message,
    ).toBe("Olá\nmundo com texto suficiente");
  });

  it("strips control characters from the message", () => {
    const result = parseLeadInput({
      ...baseValidInput(),
      message: "Olá\u0000mundo com texto suficiente",
    });

    expect(result.message).toBe("Olámundo com texto suficiente");
  });

  it("requires consent strictly equal to true", () => {
    for (const consent of [undefined, false, "on", 1, null]) {
      expectLeadError({ ...baseValidInput(), consent }, "CONSENT_REQUIRED");
    }

    expect(parseLeadInput(baseValidInput()).consent).toBe(true);
  });

  it("reports name before email and consent when several fields are invalid", () => {
    expectLeadError(
      {
        ...baseValidInput(),
        name: "",
        email: "invalido",
        consent: false,
      },
      "INVALID_NAME",
    );
  });

  it("reports message before email pattern when both are invalid", () => {
    expectLeadError(
      { ...baseValidInput(), message: "curta", email: "invalido" },
      "INVALID_MESSAGE",
    );
  });

  it("reports email pattern before service whitelist", () => {
    expectLeadError(
      {
        ...baseValidInput(),
        email: "invalido",
        service: "landing-pages",
      },
      "INVALID_EMAIL",
    );
  });

  it("reports service whitelist before consent", () => {
    expectLeadError(
      {
        ...baseValidInput(),
        service: "landing-pages",
        consent: false,
      },
      "INVALID_SERVICE",
    );
  });
});
