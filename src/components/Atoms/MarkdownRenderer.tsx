"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

const MarkdownRenderer = ({ markdownContent }: { markdownContent: string }) => {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          ol({ node, className, children, ...props }) {
            return (
              <ol {...props} className="px-5">
                {children}
              </ol>
            );
          },
          ul({ node, className, children, ...props }) {
            return (
              <ul {...props} className="px-5">
                {children}
              </ul>
            );
          },
          li({ node, className, children, ...props }) {
            return (
              <li {...props} className="py-1">
                {children}
              </li>
            );
          },
          code({ node, inline, className, children, ...props }) {
            return !inline ? (
              <SyntaxHighlighter
                language="javascript"
                PreTag="div"
                {...props}
                style={atomOneLight}
                customStyle={{
                  background: "rgb(163,163,163)",
                  color: "rgb(32,35,41)",
                  borderRadius: "4px",
                }}
              >
                {String(children)}
              </SyntaxHighlighter>
            ) : (
              <code
                {...props}
                className="bg-neutral-600 rounded-sm px-[2px] py-[1px] text-white/80 text-[15px] font-medium"
              >
                {children}
              </code>
            );
          },
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
