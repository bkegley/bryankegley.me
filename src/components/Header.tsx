import React from "react";
import { Logo } from "./Logo";
import { Link } from "gatsby";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="relative flex items-center justify-end py-4 md:py-8">
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <nav className="flex items-center text-lg">
        <Link className="mr-6" to="/posts">
          posts
        </Link>
      </nav>
    </header>
  );
};
