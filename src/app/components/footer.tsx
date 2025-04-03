import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/Images/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#F6F6F6] rounded-3xl px-28 py-28 mx-[2.5%] border border-[#d3d6e3] my-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                {/* Logo and Description */}
                <div className="flex flex-col mb-6 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                        <div className='bg-[#6E3AFF] rounded-xl px-2 py-1'>
                            <Image src={Logo} width={30} height={40} alt='Logo' />
                        </div>
                        <h2 className="text-3xl font-bold text-navy-900">Flame</h2>
                    </div>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* Newsletter Subscription */}
                <div className="w-full md:w-auto">
                    <div className="flex flex-col md:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Subscribe to our newsletter..."
                            className="border border-gray-300 rounded-lg px-4 py-3 w-full md:w-80"
                        />
                        <button className="bg-[#6E3AFF] text-white font-medium px-6 py-3 rounded-lg">
                            Join Now
                        </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                        By subscribing you agree to with our <Link href="/privacy" className="text-black underline">Privacy Policy</Link>
                    </p>
                </div>
            </div>
            <hr className="my-6" />

            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Navigation Links */}
                <div className="flex gap-8 mb-4 md:mb-0">
                    <Link href="/app" className="text-gray-800 hover:text-[#6E3AFF]">App</Link>
                    <Link href="/features" className="text-gray-800 hover:text-[#6E3AFF]">Features</Link>
                    <Link href="/developers" className="text-gray-800 hover:text-[#6E3AFF]">Developers</Link>
                </div>

                {/* Copyright */}
                <div className="text-gray-800">
                    © 2025 Flame. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;