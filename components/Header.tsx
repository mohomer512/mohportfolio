import Logo from './Logo'
import { CiMenuFries } from 'react-icons/ci'
import {Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,

} from "@/components/ui/sheet"
import MainNav from './MainNav'

const Header = () => {
  return (
        <header className='2xl:hidden absolute z-40 left-0 top-0 right-0'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between py-6'>
    <Logo />
    <Sheet>
        <SheetTrigger className='cursor-pointer text-[30px] text-white'>
            <CiMenuFries />
        </SheetTrigger>
        <SheetContent >
            <SheetHeader> 
                <SheetTitle>
                    <Logo />
                </SheetTitle>
                <SheetDescription className='sr-only' >
                    Navigation menu
                </SheetDescription>
               
                <MainNav/>
              
            </SheetHeader>

        </SheetContent>

    </Sheet>
    </div>
    </div>
    </header>
  )
}

export default Header