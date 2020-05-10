import React from "react";
import { Logo } from "./Logo";
import { Link } from "gatsby";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 md:py-8">
      <Link to="/">
        <Logo />
      </Link>
      <nav className="flex items-center text-lg">
        <Link className="mr-6" to="/posts">
          posts
        </Link>
      </nav>
    </header>
  );
};
