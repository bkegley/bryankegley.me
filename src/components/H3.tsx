import React from "react";

export interface H3Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: H3Props) => {
  return <h3 className="my-4 text-3xl font-heading">{children}</h3>;
};
