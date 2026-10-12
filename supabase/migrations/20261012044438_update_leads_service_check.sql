-- Permite persistir leads que selecionaram "Ainda não sei qual solução
-- preciso" no formulário de contato.
--
-- A validação da aplicação (lib/leads/schema.ts) deriva os valores aceitos
-- de lib/contact.ts, que já inclui 'nao-sei'. Sem esta migration, esses
-- leads passam na validação e falham no INSERT pela constraint abaixo.
alter table public.leads
  drop constraint leads_service_check;

alter table public.leads
  add constraint leads_service_check
    check (
      service in (
        'presenca-digital',
        'sistemas-web',
        'automacoes',
        'nao-sei'
      )
    );
