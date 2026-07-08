"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/", activePaths: ["/", "/home"] },
  { name: "about", path: "/about", activePaths: ["/about"] },
  { name: "services", path: "/services", activePaths: ["/services"] },
  { name: "work", path: "/work", activePaths: ["/work"] },
  { name: "contact", path: "/contact", activePaths: ["/contact"] },
];

interface NavLinksProps {
  containerStyles?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ containerStyles }) => {
  const pathname = usePathname();

  return (
    <ul className={containerStyles}>
      {links.map((link) => {
        const isActive = link.activePaths.includes(pathname);

        return (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`block rounded-lg px-4 py-3 text-sm font-semibold capitalize transition-all duration-300 ${
                isActive
                  ? "bg-accent text-primary shadow-lg shadow-sky-950/30"
                  : "text-slate-300 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
