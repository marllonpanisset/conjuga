import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-12 font-display text-[1.75rem] font-medium text-text-primary" {...props} />,
    h3: (props) => <h3 className="mt-8 font-display text-[1.375rem] font-medium text-text-primary" {...props} />,
    p: (props) => <p className="mt-5 text-[1.0625rem] leading-[1.7] text-text-secondary" {...props} />,
    ul: (props) => <ul className="mt-5 flex flex-col gap-2 pl-5 text-text-secondary marker:text-signal-strong list-disc" {...props} />,
    a: (props) => <a className="text-signal-strong underline underline-offset-4" {...props} />,
    strong: (props) => <strong className="text-text-primary" {...props} />,
    code: (props) => <code className="rounded-[4px] bg-surface-elevated px-1.5 py-0.5 font-mono text-[0.875rem]" {...props} />,
    ...components,
  };
}
