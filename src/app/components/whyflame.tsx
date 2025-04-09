import Image from "next/image";
import box from '../../../public/Images/box.png'
import privacy from '../../../public/Images/privacy.png'
import monetization from '../../../public/Images/monetization.png'
import Layer1 from '../../../public/Images/Layer1.png'
import Layer2 from '../../../public/Images/Layer2.png'
import Layer3 from '../../../public/Images/Layer3.png'
import Layer4 from '../../../public/Images/Layer4.png'

const WhyFlame = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="mb-8">
                    <p className="text-[0.5rem] md:text-xs border border-gray-400 w-fit rounded-full px-4 py-2 text-center">
                        <span className="opacity-60">WHY CHOOSE</span> <span className="bg-gradient-to-r from-[#FF640D] to-[#AB20AB] bg-clip-text text-transparent">FLAME</span><span className="opacity-60">?</span>
                    </p>
                </div>
                <p className="text-2xl md:text-4xl md:p-0 px-10 weight mb-4">Built for privacy. Built for rewards. Built for creators. Built for you. Built on Aztec</p>
                <p className="opacity-40 tracking-wide px-10 md:p-0">all while maintaining control over their data through zk-SNARKs encryption.</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mx-[5%]">
                {/* First row */}
                <div className="flex flex-col bg-[#F8F9FB] py-6 px-20 rounded-lg shadow-md items-center">
                    <Image src={privacy} width={375} height={250} alt="box" />
                    <p className="text-lg md:text-3xl font-bold py-4 text-center">Privacy-Preserving Interactions</p>
                    <p className="opacity-60 p-0 md:px-[30%] font-semibold text-center">Encrypted messaging, private transactions, and zero-knowledge proofs to protect your data.</p>
                </div>

                <div className="flex flex-col items-center gap-4 bg-[#f1ebff] py-6 px-20 rounded-lg shadow-md">
                    <Image src={monetization} width={462} height={250} alt="box" />
                    <p className="text-lg md:text-3xl font-bold text-[#6e3aff]">Creator Monetization</p>
                    <p className="opacity-60 p-0 md:px-[30%] font-semibold text-center">Earn via subscriptions, NFTs, DeFi staking, and more!</p>
                </div>

                {/* Second row */}
                <div className="flex flex-col md:grid md:grid-cols-3 col-span-2 gap-6">
                    <div className="flex flex-col gap-4 bg-[#feefe7] py-6 px-20 rounded-lg shadow-md col-span-2">
                        <div className="block md:flex md:items-center">
                            <div className="pb-4 md:p-0">
                                <p className="text-lg md:text-3xl font-bold mb-3 text-[#f6610d] w-full md:max-w-[40%]">Community Contribution</p>
                                <p className="opacity-60 font-semibold text-left w-full ">
                                    Get rewarded for building tools, completing bounties, or contributing to the Aztec ecosystem.
                                </p>
                            </div>
                            {/* Here */}

                            <div className="flex items-center justify-center w-full md:max-w-[60%]">
                                <div className="relative mx-0 w-[300px] h-[300px] md:w-[900px] md:h-[650px]">
                                    {/* Base layer (largest) */}
                                    <Image src={Layer4} width={250} height={250} alt="avatar layer 4"
                                        className="absolute top-0 left-0 w-full h-full animate-spin-slow" />

                                    {/* Middle outer layer */}
                                    <Image src={Layer3} width={200} height={200} alt="avatar layer 3"
                                        className="absolute animate-anti-spin-slow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4" />

                                    {/* Middle inner layer */}
                                    <Image src={Layer2} width={150} height={150} alt="avatar layer 2"
                                        className="absolute top-1/2 left-1/2 animate-spin-slow transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2" />

                                    {/* Center layer (smallest) */}
                                    <Image src={Layer1} width={100} height={100} alt="avatar layer 1"
                                        className="absolute top-1/2 left-1/2 animate-anti-spin-slow transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3" />

                                    {/* Center dollar sign icon */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">$</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-[#ecf8f0] py-6 px-20 rounded-lg shadow-md text-center">
                        <Image src={box} width={250} height={250} alt="box" className="mx-auto" />
                        <p className="text-lg md:text-3xl font-bold mb-3 text-[#40b66b]">Gamified Engagement</p>
                        <p className="opacity-60 font-semibold">Earn rewards through XP, loot boxes, streaks, and leaderboard rankings.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyFlame;