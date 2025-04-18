"use client";
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/Images/Logo.png';
import Phone from '../../../public/Images/smart-phone.svg';
import Laptop from '../../../public/Images/laptop.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-4 md:px-16 md:py-3 py-2 bg-[#f2eefc] shadow-md rounded-full relative z-20">
            {/* Logo and Nav Links */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="bg-[#6E3AFF] rounded-md md:rounded-xl md:px-2 md:py-1 px-[0.4rem] py-1">
                        <Image src={Logo} width={30} height={40} alt="Logo" className='w-[15px] md:w-[30px]' />
                    </div>
                    <p className="text-sm md:text-xl text-black font-bold">Flame</p>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex gap-4 font-semibold">
                    <li className="cursor-pointer">Careers</li>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">Whitepaper</li>
                </ul>
            </div>

            {/* Buttons and Hamburger Menu */}
            <div className="flex items-center gap-4">
                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-2">
                    <button className="border border-black px-3 py-3 rounded-3xl flex items-center gap-2">
                        <Image src={Phone} width={24} height={24} alt="Phone" />
                        <p className="font-bold text-[14px]">Download Mobile App</p>
                    </button>
                    <button className="bg-[#292929] px-4 py-3 rounded-3xl flex items-center gap-2">
                        <Image src={Laptop} width={24} height={24} alt="PC" />
                        <p className="text-white font-bold text-[14px]">Open Web App</p>
                    </button>
                </div>

                {/* Hamburger Menu Icon */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden relative z-50 w-6 h-6 focus:outline-none"
                >
                    <span className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-2'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-2'}`}></span>
                </button>
            </div>

            {/* Mobile Menu - Full Screen with Slide Animation */}
            <div 
                className={`fixed top-0 right-0 h-screen w-full bg-[#f2eefc] md:hidden z-40 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col justify-center h-full px-8 pt-16">
                    <ul className="flex flex-col gap-8 font-semibold text-xl mb-12">
                        <li className="cursor-pointer hover:text-[#6E3AFF] transition-colors">Apps</li>
                        <li className="cursor-pointer hover:text-[#6E3AFF] transition-colors">Features</li>
                        <li className="cursor-pointer hover:text-[#6E3AFF] transition-colors">Developers</li>
                    </ul>
                    <div className="flex flex-col gap-4 ">
                        <button className="border border-black px-4 py-4 rounded-3xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                            <Image src={Phone} width={24} height={24} alt="Phone" />
                            <p className="font-bold text-[16px]">Download Mobile App</p>
                        </button>
                        <button className="bg-[#292929] px-4 py-4 rounded-3xl flex items-center justify-center gap-2 hover:bg-black transition-colors">
                            <Image src={Laptop} width={24} height={24} alt="PC" />
                            <p className="text-white font-bold text-[16px]">Open Web App</p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;