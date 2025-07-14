import React from 'react';
import NavLinks from './NavLinks';

const MainNav = () => {
  return (
    <nav className="flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <NavLinks />
    </nav>
  );
};

export default MainNav;