import React from 'react'
import { School } from 'lucide-react'
import { Button } from './components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DarkMode } from './pages/DarkMode';
import { Label } from '@radix-ui/react-label';
import { Input } from './components/ui/input';
import { MobileNavbar } from './MobileNavbar';
import { Link } from 'react-router-dom';

import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuPortal,DropdownMenuLabel,DropdownMenuSubContent,DropdownMenuSeparator,DropdownMenuGroup, DropdownMenuSub,DropdownMenuSubTrigger} from '@radix-ui/react-dropdown-menu';
const Navbar = () => {
    const user=true;
  
  return (
    <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 flex items-center px-6 py-8 z-50'>
    
    <div className='flex items-center gap-2'>
        <School size={"30"} />
        <h1 className='hidden md:block font-extrabold text-2xl'>E-learning</h1>
    </div>
    
    <div className="flex-grow"></div> 

    {/* Right Section (User Dropdown / Login Buttons) */}
    <div className='flex items-center gap-8'>
        {
            user ? (
                <div className='relative w-auto flex items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Avatar className="flex-shrink-0 w-10 h-10">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 bg-white">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem><Link to="my-learning">My Learning</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link  to="my-profile">Edit Profile</Link></DropdownMenuItem>
                            
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            ) : (
                <div className='flex items-center gap-2'>
                    <Button>Login</Button>
                    <Button>Signup</Button>
                </div>
            )
        }
        <DarkMode/>
    </div>
    <div className='flex md:hidden items-center justify-between px-4'>
        <h1 className='font-extrabold text-2xl'>E-learning</h1>
    <MobileNavbar/>
    </div>
    
</div>

    
  )
}

export default Navbar
