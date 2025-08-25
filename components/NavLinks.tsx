"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', path: '/home' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

// Define the props type
interface NavLinksProps {
  containerStyles?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ containerStyles }) => {
  const pathname = usePathname();

  return (
    <ul className={containerStyles}>
      {links.map((link) => {
        const isActive = pathname === link.path;

        // Optional: Example logic (remove if not used)
        const charLength = link.name.length;
        const linewidth = charLength > 5 ? "after:w-[120%]" : "after:w-[90%]";
        console.log(linewidth);

        return (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`block capitalize ${isActive ? 'text-blue-400' : 'text-white'} hover:text-blue-300 -mt-0.5`}
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
