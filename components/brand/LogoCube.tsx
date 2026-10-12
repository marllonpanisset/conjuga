/**
 * Cubo isométrico modular âmbar — símbolo oficial da Conjuga.
 *
 * Geometria vetorizada a partir de `docs/references/logo-cubo-aprovado.png`
 * (caixa do símbolo 892×1003, seis painéis separados por vãos). O traço da
 * mesma cor com junção arredondada reproduz o arredondamento dos cantos do
 * desenho aprovado sem alterar as proporções.
 */
export function LogoCube({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 912 1023"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g
        transform="translate(10 10)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinejoin="round"
      >
        {/* Painel superior direito */}
        <polygon points="319,98 494,0 868,229 692,327" />
        {/* Painel superior esquerdo */}
        <polygon points="28,257 253,134 617,363 395,487" />
        {/* Faixa superior direita */}
        <polygon points="446,535 891,287 890,486 446,733" />
        {/* Barra externa esquerda */}
        <polygon points="3,317 154,410 152,834 1,737" />
        {/* Barra interna esquerda */}
        <polygon points="207,444 388,555 386,984 207,863" />
        {/* Faixa inferior direita */}
        <polygon points="446,810 886,563 884,759 448,1002" />
      </g>
    </svg>
  );
}
