import React, { useEffect, useRef } from "react";
import katex from "katex";

interface MathBlockProps {
  expression: string;   // LaTeX string
  inline?: boolean;     // inline or block mode
}

const MathBlock: React.FC<MathBlockProps> = ({ expression, inline = false }) => {
  const containerRef = useRef<HTMLSpanElement | HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(expression, containerRef.current, {
          throwOnError: false,
          displayMode: !inline,
          output: "html",
        });
      } catch (err) {
        console.error("KaTeX render error:", err);
      }
    }
  }, [expression, inline]);

  if (inline) {
    return <span ref={containerRef} className="math-inline" />;
  }

  return (
    <div ref={containerRef} className="my-4 text-center math-block" />
  );
};

export default MathBlock;
