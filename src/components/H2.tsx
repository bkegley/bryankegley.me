import React from "react";

export interface H2Props {
  children: React.ReactNode;
}

export const H2 = ({ children }: H2Props) => {
  return <h2 className="text-3xl lg:text-5xl my-4">{children}</h2>;
};
