"use client";

import React, { useState } from 'react';
import MainNav from "@/components/MainNav";
import { Menu, X } from 'lucide-react';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <div className="relative flex min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="rounded-lg border border-white/10 bg-accent p-3 text-primary shadow-lg shadow-sky-950/30 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:text-white"
          aria-label="Toggle navigation"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-[320px] bg-secondary/95 text-white shadow-2xl shadow-slate-950/40 backdrop-blur
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <MainNav />
      </aside>
      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      <main className="relative z-10 mx-auto w-full max-w-[1180px] flex-1 px-4 py-6 sm:px-6">
        <section>{children}</section>
      </main>
    </div>
  );
}
