"use client";
import Image from "next/image";
// import box from '../../../public/Images/box.png'
import privacy from '../../../public/Images/privacy.png'
import Layer1 from '../../../public/Images/Layer1.png'
import Layer2 from '../../../public/Images/Layer2.png'
import Layer3 from '../../../public/Images/Layer3.png'
import Layer4 from '../../../public/Images/Layer4.png'
import collectable1 from '../../../public/Images/Collectible1.png'
import collectable2 from '../../../public/Images/Collectible2.png'
import collectable3 from '../../../public/Images/Collectible3.png'
import collectable4 from '../../../public/Images/Collectible4.png'
import collectable5 from '../../../public/Images/Collectible5.png'
import collectable6 from '../../../public/Images/Collectible6.png'
import collectable7 from '../../../public/Images/Collectible7.png'
import collectable8 from '../../../public/Images/Collectible8.png'
import azteclogo from '../../../public/Images/aztech_logo.png'
import game from '../../../public/Images/game.png'
import { useEffect, useRef } from 'react';

const WhyFlame = () => {
    // Array of creator images for the carousel
    const creatorImages = [
        { id: 1, src: collectable1, alt: "Creator NFT 1" },
        { id: 2, src: collectable2, alt: "Creator NFT 2" },
        { id: 3, src: collectable3, alt: "Creator NFT 3" },
        { id: 4, src: collectable4, alt: "Creator NFT 4" },
        { id: 5, src: collectable5, alt: "Creator NFT 5" },
        { id: 6, src: collectable6, alt: "Creator NFT 6" },
        { id: 7, src: collectable7, alt: "Creator NFT 7" },
        { id: 8, src: collectable8, alt: "Creator NFT 8" },
    ];
    
    // Define typed ref to avoid TypeScript errors
    const carouselRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;
        
        // Calculate total content width for duplicating
        const contentWidth = carousel.scrollWidth;
        
        // Clone the initial carousel items to create a seamless loop
        const items = carousel.querySelectorAll('.carousel-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
        });
        
        // Setup animation variables
        let animationId: number;
        let position = 0;
        const speed = 0.5; // Adjust speed as needed
        
        // Animation function
        const animate = () => {
            if (!carousel) return;
            
            position += speed;
            
            // Reset position when we've scrolled through the first set of images
            if (position >= contentWidth) {
                // Jump back to start without animation
                position = 0;
                carousel.scrollLeft = position;
            } else {
                // Smooth scroll
                carousel.scrollLeft = position;
            }
            
            animationId = window.requestAnimationFrame(animate);
        };
        
        // Start the animation
        animationId = window.requestAnimationFrame(animate);
        
        // Cleanup function
        return () => {
            if (animationId) {
                window.cancelAnimationFrame(animationId);
            }
        };
    }, []);

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
                    {/* Carousel container with fade effect */}
                    <div className="relative w-full overflow-hidden">
                        {/* Left fade gradient */}
                        <div className="absolute left-0 top-0 h-full w-12 md:w-[15rem] bg-gradient-to-r from-[#f1ebff] to-transparent z-10"></div>
                        
                        {/* Scrolling image container */}
                        <div 
                            ref={carouselRef}
                            className="flex overflow-x-hidden w-full py-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {creatorImages.map((image) => (
                                <div key={image.id} className="flex-shrink-0 mx-2 w-32 carousel-item">
                                    <Image 
                                        src={image.src} 
                                        width={128} 
                                        height={160} 
                                        alt={image.alt}
                                        className="rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                        
                        {/* Right fade gradient */}
                        <div className="absolute right-0 top-0 h-full w-12 lg:w-[15rem] bg-gradient-to-l from-[#f1ebff] to-transparent z-10"></div>
                    </div>
                    
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
                                <div className="relative mx-0 md:w-[500px] md:h-[500px] w-[250px] h-[250px]">
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
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-7 h-7 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-white text-xl font-bold"><Image src={azteclogo} width={30} height={20} alt="aztec"/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-[#ecf8f0] py-6 px-20 rounded-lg shadow-md text-center justify-center">
                        <Image src={game} width={350} height={250} alt="box" className="mx-auto" />
                        <p className="text-lg md:text-3xl font-bold mb-3 text-[#40b66b]">Gamified Engagement</p>
                        <p className="opacity-60 font-semibold px-[5rem]">Earn rewards through XP, loot boxes, streaks, and leaderboard rankings.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyFlame;