"use client";

import Link from "next/link";
import Title from "../ui/Title";

const Navbar = () => {
  return (
    <nav className="flex h-20 justify-center shadow-sm">
      <div className="flex w-11/12 flex-row items-center justify-between sm:w-2/3">
        <Link href="/">
          <Title classStyle="text-3xl sm:text-5xl text-normal" />
        </Link>

        <div className="flex flex-row gap-2 sm:gap-4">
          <Link href="/about" className="hidden font-semibold sm:block">
            About
          </Link>
          <Link href="/contact" className="hidden font-semibold sm:block">
            Contact
          </Link>

          <Link
            href="/newsletter"
            className="font-semibold underline underline-offset-2"
          >
            Join our newsletter!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
