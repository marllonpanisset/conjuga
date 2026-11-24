/** Captura de tela real do projeto, com as dimensões originais do arquivo. */
export interface CaseImage {
  /** Caminho do arquivo em `/public`. */
  src: string;
  /** Largura original da captura, em pixels. */
  width: number;
  /** Altura original da captura, em pixels. */
  height: number;
  /** Legenda curta. Também usada como texto alternativo da imagem. */
  caption: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  segment: string;
  summary: string;
  context: string;
  problem: string;
  solution: string;
  technologies: string[];
  results?: string;
  serviceSlug: string;
  /** Endereço público do projeto, quando ele estiver publicado. */
  url?: string;
  /** Capturas reais do projeto, na ordem de exibição. A primeira é a imagem de apresentação. */
  images?: CaseImage[];
  /** Funcionalidades efetivamente implementadas no projeto. */
  features?: string[];
}
