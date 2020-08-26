import React from "react";
import { Logo } from "./Logo";
import { Link } from "gatsby";
import { Search } from "./Search";

export const Header = () => {
  return (
    <header className="relative flex items-center justify-end h-20 py-4 mb-12 md:mb-20 space-x-4 md:py-12">
      <Search />
      <nav className="flex items-center text-lg">
        <Link className="mr-6" to="/posts">
          posts
        </Link>
      </nav>
      <div className="w-1/4 pb-0 pb-5 md: sm:w-1/6">
        <Link to="/">
          <Logo variant="outline" />
        </Link>
      </div>
    </header>
  );
};
