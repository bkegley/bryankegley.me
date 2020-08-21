import React from "react";
import "typeface-aileron";
import "typeface-lato";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock, H1, H2, Quotation } from "./src/components";

import "./src/styles/style.css";

const components = {
  p: props => <p className="my-6" {...props} />,
  pre: props => <div className="text-sm" {...props} />,
  code: CodeBlock,
  inlineCode: props => (
    <span className="px-2 py-1 text-sm text-white bg-gray-900" {...props} />
  ),
  h1: H1,
  h2: H2,
  Quotation
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
