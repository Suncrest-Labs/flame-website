import Image from "next/image";
import info from '../../../public/Images/info.svg';
import playstore from '../../../public/Images/playstore.png';
import appstore from '../../../public/Images/appstore.png';
import bannerphone from '../../../public/Images/banner-phone.png'

const Banner = () => {
    return (
        <div className="bg-[#f1ebff] mx-[5%] my-8 flex justify-between px-20 pt-20 rounded-4xl items-center border border-[#d3d6e3]">
            <div>
                <div className="flex flex-col gap-6">
                    <p className="text-[3rem] font-semibold text-[#161E55]">Ready to Join Flame?</p>
                    <p className="text-lg opacity-60 pb-6  tracking-wide">Join millions of users building the future of SocialFi</p>
                </div>

                <div className="text-center mt-2 px-4 bg-white w-fit py-2 flex gap-6 rounded-4xl">
                    <div className="flex items-center justify-center gap-2">
                        <Image src={info} width={25} height={40} alt="infoicon" />
                        <p className="text-lg opacity-60 font-semibold">App available for </p>
                    </div>
                    <div className="bg-black w-fit flex items-center justify-center gap-2 rounded-full px-2 py-2">
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

            <Image src={bannerphone} width={800} height={400} alt="phone" />
        </div>
    );
}

export default Banner;