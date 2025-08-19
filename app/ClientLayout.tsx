"use client";

import React, { useState } from 'react';
import MainNav from "@/components/MainNav";
import { Menu, X } from 'lucide-react'; // Import icons for the toggle button

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
    <div className="flex min-h-screen">
      {/* Sidebar toggle button for all screen sizes */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
          aria-label="Toggle navigation"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Sidebar component */}
      <aside
        className={`fixed top-0 left-0 w-[285px] h-full bg-secondary text-white shadow-2xl z-40
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <MainNav />
      </aside>
      
      {/* Overlay for all screen sizes when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content area */}
      <main className="flex-1 px-4 py-6 max-w-[1130px] mx-auto w-full">
   
        <section>{children}</section>
      </main>
    </div>
  );
}
