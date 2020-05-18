import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SEO } from "./SEO";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SEO />
      <div className="bg-gray-800 text-gray-300 text-lg lg:text-xl px-6 lg:px-0 relative">
        <div className="wrapper container mx-auto min-h-screen">
          <Header />
          <main className="content mx-4 lg:mx-auto mb-32">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
