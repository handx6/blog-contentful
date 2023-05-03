import React, { useState } from "react";
import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function MenuBurger({  }) {
  // gère le changement de logo
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={`${isMenuOpen ? "block" : "hidden"} flex`}>
        <div className="flex opacity-50 fixed left-0 top-0 items-center h-1/3 justify-center w-1/4 bg-black">
          <RxDoubleArrowRight
            className="text-white text-6xl"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <div
          className="fixed w-3/4 right-0 bg-black z-50md:w-3/4 md:right-0 top-0 h-1/3 flex items-center justify-center"
        >
          <ul
            className="pl-8 text-sm pt-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>Team</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className="flex items-center space-x-1 text-[#7F7F7F]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:block lg:hidden cursor-pointer  text-[#7F7F7F] "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <p className="uppercase text-xl">Menu</p>
      </div>
    </>
  );
}
