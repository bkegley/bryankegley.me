import React from "react";

export interface QuotationProps {
  children: React.ReactNode;
}

export const Quotation = ({ children }: QuotationProps) => {
  return (
    <blockquote className="font-light text-3xl md:text-5xl leading-relaxed text-center">
      {children}
    </blockquote>
  );
};
