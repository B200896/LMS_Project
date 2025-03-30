import React, { useState, useEffect, useRef } from 'react';
import { School, Bell, Menu } from 'lucide-react';
import { Button } from './components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DarkMode } from './pages/DarkMode';
import { Link, useNavigate } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup
} from '@radix-ui/react-dropdown-menu';
import { MobileNavbar } from './MobileNavbar';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const userData = sessionStorage.getItem('userData');
        setUser(userData ? JSON.parse(userData) : null);
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('userData');
        setUser(null);
        navigate('/');
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-gray-800 border-gray-200 fixed top-0 left-0 right-0 duration-300 flex items-center justify-between px-6 z-50'>
            
            {/* Logo */}
            <div className='flex items-center gap-3'>
                <School size={30} className='text-blue-500' />
                <h1 className='hidden md:block font-extrabold text-2xl'>E-learning</h1>
            </div>

            {/* Navigation & Actions */}
            <div className='flex items-center gap-6'>
                {user ? (
                    <div className='flex items-center gap-4 relative' ref={dropdownRef}>
                        <Bell size={22} className='cursor-pointer' />
                        
                        <DropdownMenu open={open} onOpenChange={setOpen}>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer w-10 h-10">
                                    <AvatarImage src={user.avatar || "https://github.com/shadcn.png"} alt="User" />
                                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent 
                                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-lg rounded-md p-2 z-50 max-h-[250px] overflow-auto"
                                align="end"
                            >
                                <DropdownMenuLabel className="text-sm font-semibold">{user.name || "My Account"}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem onClick={() => navigate('/my-learning')}>📚 My Learning</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigate('/my-profile')}>✏️ Edit Profile</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>🚪 Log out</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => navigate('/dashboard')}>📊 Dashboard</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <div className='flex items-center gap-3'>
                        <Button variant="outline" onClick={() => navigate('/login')}>Login</Button>
                        <Button onClick={() => navigate('/signup')}>Signup</Button>
                    </div>
                )}
                <DarkMode />
            </div>
            
            {/* Mobile Navbar */}
            <div className='md:hidden flex items-center'>
                <MobileNavbar />
            </div>
        </header>
    );
};

export default Navbar;
