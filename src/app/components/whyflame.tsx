import Image from "next/image";
import box from '../../../public/Images/box.png'

const WhyFlame = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="mb-8">
                    <p className="text-xs border border-gray-400 w-fit rounded-full px-4 py-2 text-center">
                        <span className="opacity-60">WHY CHOOSE</span> <span className="bg-gradient-to-r from-[#FF640D] to-[#AB20AB] bg-clip-text text-transparent">FLAME</span><span className="opacity-60">?</span>
                    </p>
                </div>
                <p className="text-4xl weight mb-4">Built for privacy. Built for rewards. Built for creators. Built for you. Built on Aztec</p>
                <p className="opacity-40 tracking-wide">all while maintaining control over their data through zk-SNARKs encryption.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mx-[5%]">
                {/* First row */}
                <div className="flex flex-col bg-[#F8F9FB] py-6 px-20 rounded-lg shadow-md items-center">
                    <Image src={box} width={250} height={250} alt="box" />
                    <p className="text-3xl font-bold py-4">Privacy-Preserving Interactions</p>
                    <p className="opacity-60 px-[30%] font-semibold text-center">Encrypted messaging, private transactions, and zero-knowledge proofs to protect your data.</p>
                </div>

                <div className="flex flex-col items-center gap-4 bg-[#f1ebff] py-6 px-20 rounded-lg shadow-md">
                    <Image src={box} width={250} height={250} alt="box" />
                    <p className="text-3xl font-bold text-[#6e3aff]">Creator Monetization</p>
                    <p className="opacity-60 px-[30%] font-semibold text-center">Earn via subscriptions, NFTs, DeFi staking, and more!</p>
                </div>

                {/* Second row */}
                <div className="grid grid-cols-3 col-span-2 gap-6">
                    <div className="flex flex-col gap-4 bg-[#feefe7] py-6 px-20 rounded-lg shadow-md col-span-2">
                        <div className="flex">
                            <div>
                                <p className="text-3xl font-bold mb-3 text-[#f6610d] max-w-[40%]">Community Contribution</p>
                                <p className="opacity-60 font-semibold text-left max-w-[40%]">
                                    Get rewarded for building tools, completing bounties, or contributing to the Aztec ecosystem.
                                </p>
                            </div>
                            <Image src={box} width={250} height={250} alt="box" className="ml-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-[#ecf8f0] py-6 px-20 rounded-lg shadow-md text-center">
                        <Image src={box} width={250} height={250} alt="box" className="mx-auto" />
                        <p className="text-3xl font-bold mb-3 text-[#40b66b]">Gamified Engagement</p>
                        <p>Earn rewards through XP, loot boxes, streaks, and leaderboard rankings.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyFlame;