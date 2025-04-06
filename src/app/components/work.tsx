import React from 'react';
import Image from 'next/image';
import work from '../../../public/Images/work.png';
import workwhite from '../../../public/Images/work-white.png';

const Work: React.FC = () => {
  const steps = [
    {
      title: "Create an Account",
      description: "Quick sign-up process",
      imageUrl: work
    },
    {
      title: "Post & Engage",
      description: "Share content, chat securely, and interact with others.",
      imageUrl: workwhite
    },
    {
      title: "Earn & Contribute",
      description: "Complete bounties, monetize content, and build the community.",
      imageUrl: work
    },
    {
      title: "Get Rewarded",
      description: "Collect rewards and grow your reputation in the Flame ecosystem.",
      imageUrl: work
    }
  ];

  return (
    <section className="px-16 py-8 md:py-0 md:px-4 h-full md:h-[60vh] w-full bg-[#F7F8FC] flex flex-col items-center justify-center">
      <div className="flex justify-center mb-12">
        <p className="text-xs border border-gray-400 w-fit rounded-full px-4 py-2 text-center">
          <span className="opacity-60">WHY CHOOSE</span> <span className="bg-gradient-to-r from-[#FF640D] to-[#AB20AB] bg-clip-text text-transparent">FLAME</span><span className="opacity-60">?</span>
        </p>
      </div>
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Flame Works</h2>
          <p className="text-lg text-gray-600">
            all while maintaining control over their data through zk-SNARKs encryption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-28 w-full md:max-w-[100rem] mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-56 mb-6 overflow-hidden rounded-lg bg-purple-50">
                <Image
                  src={step.imageUrl}
                  alt={step.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-105"
                  priority={index === 0}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;