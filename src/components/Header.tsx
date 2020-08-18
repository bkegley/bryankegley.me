import React from "react";
import { Logo } from "./Logo";
import { Link } from "gatsby";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="relative flex items-center justify-end py-4 space-x-4 md:py-8">
      <Search />
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
