import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return (
    <div className="uppercase tracking-wide text text-gray-400">{children}</div>
  );
};
