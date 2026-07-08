import React from "react";
import { MdFileDownload } from "react-icons/md";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const MainNav = () => {
  return (
    <nav className="flex h-full w-full items-center justify-center p-4">
      <div className="flex h-full w-full max-w-[285px] flex-col items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
        <div className="flex w-full flex-col items-center gap-10 pt-5">
          <Logo />
          <NavLinks containerStyles="flex w-full flex-col gap-2" />
        </div>

        <a
          href="https://1drv.ms/b/c/8e37324a842fb2f9/Ef5rGzLtqZJEj5I1_VQefzABQPe9CFjGqhKzUJD7dNHPEA?e=6v8efE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-tertiary w-full gap-3"
        >
          <span>Download CV</span>
          <MdFileDownload className="text-xl" />
        </a>
      </div>
    </nav>
  );
};

export default MainNav;
