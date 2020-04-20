import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-500 text-gray-300 px-6 lg:px-0">
      <div className="content container w-full mx-auto">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
