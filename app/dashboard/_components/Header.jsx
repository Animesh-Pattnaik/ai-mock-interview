"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <header className="flex p-4 items-center justify-between bg-secondary shadow-sm relative">
      {/* Logo */}
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={160}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex gap-6">
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/questions" && "text-primary font-bold"
            }`}
          >
            Questions
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/upgrade" && "text-primary font-bold"
            }`}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/how" && "text-primary font-bold"
            }`}
          >
            How it works?
          </li>
        </ul>
      </div>

      {/* UserButton and Hamburger Menu for Mobile */}
      <div className="flex items-center gap-4 md:gap-6 md:ml-auto">
        <UserButton />
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-secondary shadow-lg p-4 flex flex-col gap-4">
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard" && "text-primary font-bold"
            }`}
          >
            Dashboard
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/questions" && "text-primary font-bold"
            }`}
          >
            Questions
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/upgrade" && "text-primary font-bold"
            }`}
          >
            Upgrade
          </li>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
              path === "/dashboard/how" && "text-primary font-bold"
            }`}
          >
            How it works?
          </li>
        </ul>
      )}
    </header>
  );
};
