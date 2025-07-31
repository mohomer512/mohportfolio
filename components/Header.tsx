import Logo from './Logo'
import Socials from './Socials'
import { CiMenuFries } from 'react-icons/ci'
import { MdFileDownload } from 'react-icons/md'
import {Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,

} from "@/components/ui/sheet"
import NavLinks from './NavLinks'

const Header = () => {
  return (
        <header className='2xl:hidden absolute z-40 left-0 top-0 right-0'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between py-6'>
    <Logo />
    {/** nav mobile sheet component */}
    <Sheet>
        <SheetTrigger className='cursor-pointer text-[30px] text-white'>
            <CiMenuFries />
        </SheetTrigger>
        <SheetContent className='bg-primary border-0 flex flex-col justify-between
        item-center pt-16 pb-20
        ' side="left">
            <SheetHeader> 
                <SheetTitle>
                    <Logo />
                </SheetTitle>
                <SheetDescription className='sr-only' >
                    Navigation menu
                </SheetDescription>
                <NavLinks containerStyles='flex flex-col gap-8 max-w-[100px]' />
                <div>
                    
                              <button className="btn btn-lg btn-tertiary mb-16">
                                <div className="flex items-center gap-3">
                                  <span>Download CV</span>
                                  <MdFileDownload  className='text-xl'/>
                                </div>
                              </button>

                              <Socials  
                                 containerStyles=" flex 2xl:flex-col gap-6  2xl:flex 2xl:absolute
        2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:-translate-x-1/2 2xl:-translate-y-1/2
        " 
        
        iconStyles="
        bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px]
        flex items-center justify-center rounded-full cursor-pointer
        "
                              />
                    
                </div>
            </SheetHeader>

        </SheetContent>

    </Sheet>
    </div>
    </div>
    </header>
  )
}

export default Header