const Reward = () => {
    return (
        <>
            <div className="flex flex-col items-center px-4 md:px-0">
                <div className="mt-12 md:mt-24 mb-6 md:mb-10 opacity-40">
                    <p className="text-xs border border-gray-400 w-fit rounded-full px-3 md:px-4 py-1 md:py-2 text-center">
                        MONETIZATION & REWARDS
                    </p>
                </div>
                <p className="text-2xl md:text-3xl mb-3 md:mb-5 text-center">Monetize Your Creativity</p>
                <p className="tracking-wider opacity-60 text-center text-sm md:text-base px-2 md:px-0">
                    all while maintaining control over their data through zk-SNARKs encryption.
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 px-8 md:grid-cols-3 gap-4 md:gap-6 md:px-[5%] py-10 md:py-20">
                {/* First row */}
                <div
                    className="col-span-1 md:col-span-2 h-[300px] md:h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/tipping.png')` }}
                >
                    <p className="text-xl md:text-[2.5rem] font-semibold p-4 md:p-8 max-w-full md:max-w-[30%]">TIPPING & SUBSCRIPTIONS</p>
                </div>

                <div
                    className="col-span-1 h-[300px] md:h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/stake.png')` }}
                >
                    <p className="text-xl md:text-[2.5rem] font-semibold p-4 md:p-8">STAKE & EARN YIELD</p>
                </div>

                {/* Second row */}
                <div
                    className="col-span-1 h-[300px] md:h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/nft.png')` }}
                >
                    <p className="text-xl md:text-[2.5rem] font-semibold p-4 md:p-8 max-w-full md:max-w-[70%] leading-tight md:leading-12">TRADE NFTS & OTHER DIGITAL ASSETS</p>
                </div>

                <div
                    className="col-span-1 md:col-span-2 h-[300px] md:h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/aztec.png')` }}
                >
                    <p className="text-xl md:text-[2.5rem] font-semibold p-4 md:p-8">BUILT ON AZTEC</p>
                </div>
            </div>
        </>
    );
};

export default Reward;