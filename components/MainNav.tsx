import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { MdFileDownload } from 'react-icons/md';

const MainNav = () => {
  return (
    <nav className="w-full h-screen fixed top-0 left-0 flex items-center justify-center p-4 xl:p-0 z-50">
      <div className='flex flex-col h-full items-center justify-between p-8 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl w-full max-w-[300px] xl:w-auto xl:h-[calc(100vh-128px)]'>
        
        {/* Logo and Navigation Links */}
        <div className="flex flex-col items-center gap-12 pt-8">
          <Logo />
          
          <NavLinks containerStyles='flex flex-col gap-6 text-gray-300' />
        </div>

        {/* Download CV Button */}
        <a href="https://my.microsoftpersonalcontent.com/personal/8e37324a842fb2f9/_layouts/15/download.aspx?UniqueId=321b6bfe-a9ed-4492-8f92-35fd541e7f30&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiJkZWQ2ODU1Ni05ZjczLTQ3YWEtYmFhZS0wZmNjZTI1MzMzNGYiLCJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXkubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzU1NTIwMzUwIn0.IOu9BHAj3ZgZY6N0O_-k0EWQwxa59tB0-_3cvTcihQABb0mVOUQ9eFGL4n3dPR2qQbz3StpsMS1YUd_Dj3IrE3cWuoc_37_MzegpSw1bT0iCPiblJiUjeijcxUhhtWWwiipqVdWjuygfG7KN5BduLnmZA9pQo1_CzMG9F2bue82HRw8eWz-IK6d4bqFQCEZTY84gWEZNbYboWuOKkCFp6rx6acwUMKuL1ShhrqRct5Jzce60iRI54liRriqhQNECt1qVJU6SZymzZEfYc_MSH0hNpEgAFyRxTxzf2kbxZi35Gd5pTMMIkT-miK5h23ty3UtxoQ9EaaWkGyj8axWyBJF_lCtzRyFkHPd5B7uKq8m-W5WogwzvB3n8CDFpEFFbbS82lGAg-Ryb5LOXnCM_Kl22y8WkUHlIV3eFkgD0Ms_dlq1CCZ624GtqptmRmhMOLvksE6d_8sm2zcPZOiBHQMaiDFquBz3hBHga6CwTyqsf7YCLA0P_0bB4FGh9dJjvhchbWv9BOJKqmDqHQa_OWw.k_tX_2haxiqRfmN7uPRQW20jXlO24-pokAC-ovxImro&ApiVersion=2.0" className="w-full text-center py-3 px-6 bg-transparent text-white border border-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg">
          <div className="flex items-center justify-center gap-3">
            <span>Download CV</span>
            <MdFileDownload className='text-xl' />
          </div>
        </a>
            
      </div>
    </nav>
  );
};

export default MainNav;
