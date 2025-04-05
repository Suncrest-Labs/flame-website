import Image from 'next/image';
import Logo from '../../../public/Images/Logo.png';
import Phone from '../../../public/Images/smart-phone.svg';
import Laptop from '../../../public/Images/laptop.svg';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-16 py-3 bg-[#f2eefc] shadow-md rounded-full'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <div className='bg-[#6E3AFF] rounded-xl px-2 py-1'>
                        <Image src={Logo} width={30} height={40} alt='Logo' />
                    </div>
                    <p className='text-xl text-black font-bold'>Flame</p>
                </div>
                <ul className='flex gap-4 font-semibold'>
                    <li>Apps</li>
                    <li>Features</li>
                    <li>Developers</li>
                </ul>
            </div>

            <div className='flex items-center gap-2'>
                <button className='border border-black px-3 py-3 rounded-3xl flex items-center gap-2'>
                    <Image src={Phone} width={24} height={24} alt='Phone' />
                    <p className=' font-bold text-[14px]'>Download Mobile App</p>
                </button>
                <button className='bg-[#292929] px-4 py-3 rounded-3xl flex items-center gap-2'>
                    <Image src={Laptop} width={24} height={24} alt='PC' />
                    <p className='text-white font-bold text-[14px]'>Open Web App</p>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;