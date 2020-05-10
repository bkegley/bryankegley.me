import React from "react";
import "typeface-aileron";
import "typeface-lato";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock, H1, H2 } from "./src/components";

import "./src/styles/style.css";

const components = {
  p: (props) => <p className="my-6" {...props} />,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  h1: H1,
  h2: H2,
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
