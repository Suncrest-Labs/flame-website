const Work = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="mt-24 mb-10 opacity-40">
                    <p className="text-xs border border-gray-400 w-fit rounded-full px-4 py-2 text-center">
                        MONETIZATION & REWARDS
                    </p>
                </div>
                <p className="text-3xl mb-5">Monetize Your Creativity</p>
                <p className="tracking-wider opacity-60">
                    all while maintaining control over their data through zk-SNARKs encryption.
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-3 gap-6 px-[5%] py-20">
                {/* First row */}
                <div
                    className="col-span-2 h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/tipping.png')` }}
                ></div>

                <div
                    className="col-span-1 h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/stake.png')` }}
                ></div>

                {/* Second row */}
                <div
                    className="col-span-1 h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/nft.png')` }}
                ></div>

                <div
                    className="col-span-2 h-[700px] bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url('/Images/aztec.png')` }}
                ></div>
            </div>
        </>
    );
};

export default Work;
