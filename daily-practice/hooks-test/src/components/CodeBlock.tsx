import React, { useRef, useEffect } from "react";
import hljs from "@/utils/highlight";
import "highlight.js/styles/dark.css";
interface ICodeBlockProps {
  language: string;
  code: string;
}
const CodeBlock = ({ language, code }: ICodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  useEffect(() => {
    if (preRef.current) {
      hljs.highlightElement(preRef.current);
    }
  }, [code]);
  return (
    <div className="w-full">
      <pre>
        <code id={language} ref={preRef} className={language}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
