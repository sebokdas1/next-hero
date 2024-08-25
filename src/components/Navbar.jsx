"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
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

  const loginHandler = () => {
    router.push("/login");
  };
  return (
    <nav className="p-3 flex lg:justify-evenly items-center bg-gray-200">
      <Link href={"/"} className="text-green-700 text-2xl font-bold">
        Logo
      </Link>

      <ul className="flex justify-between lg:space-x-4">
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

      <button onClick={loginHandler}>LogIn</button>
    </nav>
  );
};

export default Navbar;
