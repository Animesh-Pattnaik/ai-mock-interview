"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Import Link component
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
        priority
        style={{ width: "auto", height: "auto" }}
      />

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex gap-6">
          <li>
            <Link
              href="/dashboard"
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard" && "text-primary font-bold"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/upgrade"
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/upgrade" && "text-primary font-bold"
              }`}
            >
              Upgrade
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/how"
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/how" && "text-primary font-bold"
              }`}
            >
              How it works?
            </Link>
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
          <li>
            <Link
              href="/dashboard"
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard" && "text-primary font-bold"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/upgrade"
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/upgrade" && "text-primary font-bold"
              }`}
            >
              Upgrade
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/how"
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path === "/dashboard/how" && "text-primary font-bold"
              }`}
            >
              How it works?
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};
