import React from "react";
import { Logo } from "./Logo";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-2 md:py-8">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="flex items-center">
        <Link className="mr-6" to="/notes">
          notes
        </Link>
        <Link className="mr-6" to="/snippets">
          snippets
        </Link>
        <Link to="/about">about</Link>
      </nav>
    </header>
  );
};
