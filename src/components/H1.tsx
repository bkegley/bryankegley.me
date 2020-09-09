import React from "react";

export interface H1Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: H1Props) => {
  return (
    <h1 className="text-primary font-bold text-5xl lg:text-8xl my-4 font-heading leading-none">
      {children}
    </h1>
  );
};
