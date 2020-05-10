import React from "react";

export interface H3Props {
  children: React.ReactNode;
}

export const H3 = ({ children }: H3Props) => {
  return (
    <h3 className="text-secondary text-3xl my-4 font-heading">{children}</h3>
  );
};
