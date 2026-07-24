export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ContactDelivery {
  deliver(submission: ContactSubmission): Promise<void>;
}

export class ContactDeliveryNotConfiguredError extends Error {
  constructor() {
    super("A entrega de contatos ainda não foi configurada.");
    this.name = "ContactDeliveryNotConfiguredError";
  }
}

// Esta porta isola a rota do provedor de e-mail ou CRM escolhido no futuro.
// Enquanto não houver um adaptador real, a API falha explicitamente em vez de
// confirmar um envio que não seria entregue.
export const contactDelivery: ContactDelivery = {
  // The interface stays provider-ready while this placeholder avoids unused data.
  async deliver() {
    throw new ContactDeliveryNotConfiguredError();
  },
};
