import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { theme } from "../utils/theme";

export interface CodeBlockProps {
  language?: Language;
  children: string;
}

export const CodeBlock = ({
  children,
  language = "typescript"
}: CodeBlockProps) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{
              ...style,
              padding: "20px",
              overflow: "auto",
              minWidth: "100%",
              margin: "2rem auto"
            }}
          >
            {tokens.map((line, i) => {
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => {
                    return (
                      <span key={key} {...getTokenProps({ token, key })} />
                    );
                  })}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};
