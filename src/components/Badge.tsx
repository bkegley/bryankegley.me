import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="px-2 py-1 bg-gray-600 text-gray-100 rounded font-heading text-sm uppercase tracking-wide m-1">
      {children}
    </span>
  );
};
