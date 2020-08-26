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
      <div className="relative px-6 text-lg text-gray-300 bg-gray-800 lg:text-xl lg:px-0">
        <div className="container min-h-screen mx-auto wrapper">
          <Header />
          <main className="mx-4 mb-32 content lg:mx-auto">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};
