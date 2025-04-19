"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dummy from '../../../public/Images/dummy.png';
import dummy2 from '../../../public/Images/dummy2.png';

const HowFlameWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageFading, setImageFading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: 1,
      title: "Create An Account",
      description: "Quick sign-up process",
      image: dummy // Replace with your actual image
    },
    {
      number: 2,
      title: "Post & Engage",
      description: "Share content, chat securely, and interact with others.",
      image: dummy2
    },
    {
      number: 3,
      title: "Earn & Contribute",
      description: "Complete bounties, monetize content, and build the community.",
      image: dummy
    },
    {
      number: 4,
      title: "Get Rewarded",
      description: "Collect rewards and grow your reputation in the Flame ecosystem.",
      image: dummy2
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When section is in viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setActiveStep(0); // Reset to first step when out of view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isVisible) {
      intervalId = setInterval(() => {
        setImageFading(true);

        // Wait for fade out to complete before changing step
        setTimeout(() => {
          setActiveStep((prev) => (prev + 1) % steps.length);
          setImageFading(false);
        }, 500);
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isVisible, steps.length]);

  const handleStepClick = (index: number) => {
    setImageFading(true);

    setTimeout(() => {
      setActiveStep(index);
      setImageFading(false);
    }, 500);
  };

  return (
    <div ref={sectionRef} className="w-full px-6 md:px-16 py-16 bg-[#f7f8fc]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-56 max-w-[90rem] mx-auto">

        {/* Left Side - Workflow Steps */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <h1 className="text-4xl font-bold mb-16">How Flame works</h1>
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex mb-12 cursor-pointer"
                onClick={() => handleStepClick(index)}
              >
                <div className="relative mr-6">
                  {/* Vertical line connecting the circles */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-12 w-0.5 h-16 bg-gray-200 -translate-x-1/2"></div>
                  )}

                  {/* Number circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative transition-all duration-300
                      ${activeStep === index ? 'bg-purple-600 text-white' : 'border-2 border-gray-300 text-black'}`}
                  >
                    <span className="font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Step content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="flex items-center justify-center gap-2 border-2 border-gray-300 rounded-full py-3 px-8 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              Download For Mobile
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-800 text-white rounded-full py-3 px-8 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h.01" />
                <path d="M11 7h.01" />
                <path d="M15 7h.01" />
              </svg>
              Open Web App
            </button>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden relative h-[700px] mt-8 md:mt-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${activeStep === index
                ? imageFading ? 'opacity-0' : 'opacity-100'
                : 'opacity-0'
                }`}
              style={{ zIndex: activeStep === index ? 10 : 1 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={typeof step.image === 'string' ? step.image : step.image.src}
                  alt={step.title}
                  fill
                  className="object-cover rounded-xl"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowFlameWorks;