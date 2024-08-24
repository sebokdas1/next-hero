"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ];
  return (
    <nav className="p-3 flex justify-evenly bg-gray-200">
      <h2 className="text-green-700 text-2xl font-bold">Logo</h2>
      <ul className="flex justify-between space-x-4">
        {links?.map((link) => (
          <Link
            className={`${pathName === link.path && "text-cyan-700"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
