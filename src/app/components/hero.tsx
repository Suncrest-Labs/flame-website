import Image from "next/image";
import people from '../../../public/Images/people.png';
import icon from '../../../public/Images/new.svg';
import Phone from '../../../public/Images/smart-phone.svg';
import Laptop from '../../../public/Images/laptop.svg';
import info from '../../../public/Images/info.svg';
import playstore from '../../../public/Images/playstore.png';
import appstore from '../../../public/Images/appstore.png';
import phonemockups from '../../../public/Images/Phone-Mockups.png';
import modals from '../../../public/Images/Modals.png';
import star from '../../../public/Images/star.png';
import shield from '../../../public/Images/shield.png';
import wallet from '../../../public/Images/wallet.png';
import man from '../../../public/Images/man.png';

const Hero = () => {
    return (
        <div className="relative">
            <div>
                <div className="w-fit mx-auto bg-white rounded-3xl py-2 px-1 flex flex-col items-center justify-center gap-4 shadow-md mt-20">
                    <div className="flex items-center justify-center text-center gap-2 md:gap-10">
                        <Image src={people} height={40} width={45} alt="people" className="cursor-pointer w-[30px] md:w-[45px]" />
                        <p className="text-xs md:text-[16px]">Where Social Meets Privacy & Rewards</p>
                        <Image src={icon} height={40} width={40} alt="new" className="cursor-pointer w-[30px] md:w-[40px]" />
                    </div>
                </div>

                <div className="flex flex-col pt-8 md:p-0 items-center justify-center leading-none md:leading-24 text-center">
                    <p className="text-[2rem] md:text-[5rem] font-bold bg-gradient-to-r from-[#FF640D] from-40% to-[#AB20AB] to-60% bg-clip-text text-transparent">
                        Socialize. Earn.
                    </p>
                    <p className="text-[3.5rem] md:text-[5rem] font-bold">Stay Private.</p>
                </div>

                <div className="flex flex-col items-center justify-center text-center mt-5 gap-4">
                    <p className="opacity-60 font-semibold text-sm md:text-[16px]">The next-gen SocialFi app where privacy meets opportunity</p>
                    <div className='flex items-center gap-2'>
                        <button className='border border-black px-3 py-3 rounded-3xl flex items-center gap-1 md:gap-2'>
                            <Image src={Phone} width={24} height={24} alt='Phone' className="md:w-[24px] md:h-[24px] w-[15px] h-[15px]" />
                            <p className=' font-bold md:text-[14px] text-xs'>Download Mobile App</p>
                        </button>
                        <button className='bg-[#292929] px-4 py-3 rounded-3xl flex items-center gap-1 md:gap-2'>
                            <Image src={Laptop} width={24} height={24} alt='PC' className="md:w-[24px] md:h-[24px] w-[15px] h-[15px]" />
                            <p className='text-white font-bold md:text-[14px] text-xs'>Open Web App</p>
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-center mt-2">
                        <div className="flex items-center justify-center gap-2">
                            <Image src={info} width={25} height={40} alt="infoicon" className="w-[15px] md:w-[25px]" />
                            <p className="text-sm md:text-lg opacity-60 font-semibold">App available for </p>
                        </div>
                        <div className="bg-black w-fit flex items-center justify-center gap-2 rounded-full px-2 py-1">
                            <Image
                                src={playstore}
                                width={30}
                                height={26}
                                alt="playstore"
                                className="border-r-2 border-[#28282C] pr-2"
                            />
                            <Image
                                src={appstore}
                                width={30}
                                height={26}
                                alt="appstore"
                                className="pl-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center relative pt-[15%] md:pt-[5%]">
                    <Image src={phonemockups} width={1500} height={330} alt="mockups" className="" />
                    <Image src={modals} width={1200} height={210} alt="mockups" className="absolute w-[300px] md:w-[1200px]" />
                </div>
            </div>


            <Image src={star} width={100} height={210} alt="mockups" className="absolute md:top-3 top-[10%] md:left-1/4 w-[40px] md:w-[100px]" />
            <Image src={wallet} width={200} height={210} alt="mockups" className="absolute md:top-3 bottom-[25%] md:right-1/4 md:w-[200px] w-[80px] animate-bounce animation-delay-300" />
            <Image src={man} width={120} height={210} alt="mockups" className="absolute md:top-1/3 md:right-1/5 bottom-[25%] right-[1%] w-[45px] md:w-[120px]" />
            <Image src={shield} width={200} height={210} alt="mockups" className="absolute md:top-1/3 md:left-1/5 top-[10%] right-[20px] w-[70px] md:w-[200px] animate-bounce animation-delay-700" />
        </div>
    );
}

export default Hero;