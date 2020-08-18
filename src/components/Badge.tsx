import React from "react";

export interface BadgeProps {
  type?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Badge = ({
  type = "primary",
  size = "md",
  children
}: BadgeProps) => {
  return (
    //<span className="px-2 py-1 m-1 text-sm tracking-wide text-gray-100 uppercase bg-gray-600 rounded font-heading">
    <span className={`badge badge-${type} badge-${size}`}>{children}</span>
  );
};
