import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { MdFileDownload } from 'react-icons/md';

const MainNav = () => {
  return (
    <nav className="w-full h-screen fixed top-0 left-0 flex items-center justify-center p-4 xl:p-0 z-50">
      <div className='flex flex-col h-full items-center justify-between p-8 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl w-full max-w-[300px] xl:w-auto xl:h-[calc(100vh-128px)] '>
        
        {/* Logo and Navigation Links */}
        <div className="flex flex-col items-center gap-12 pt-8">
          <Logo />
          
          <NavLinks containerStyles='flex flex-col gap-6 text-gray-300  -mt-2 ' />
        </div>

        {/* Download CV Button */}
        <a href="https://1drv.ms/b/c/8e37324a842fb2f9/Ef5rGzLtqZJEj5I1_VQefzABQPe9CFjGqhKzUJD7dNHPEA?e=6v8efE" className="w-full text-center py-3 px-6 bg-transparent text-white border border-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg">
          <div className="ml-7 flex items-center justify-center gap-3">
            <span>Download CV</span>
            <MdFileDownload className='text-xl' />
          </div>
        </a>
            
      </div>
    </nav>
  );
};

export default MainNav;
