"use client";

import { useState } from "react";
import Image from "next/image";
import flameicon from "../../../public/Images/flame-icon.png";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "So, what really is Flame and why is it different?",
      answer:
        "Flame is a Web3 social app that turns your time and interactions into real value. But it's not just another crypto tool, it's built to feel social, simple, and rewarding. It's user-first, privacy-focused, and designed to make every tap, scroll, and message actually count.",
    },
    {
      question: "Is my data safe?",
      answer: `Heck yes. Flame doesn't mess with your privacy. Your data stays with you, and you alone, completly private, permissionless and secure.`,
    },
    {
      question: "Is there a community or am I vibing solo?",
      answer: `Of course not, We will never just leave u hanging, Whether you're here for the projects or the memes, the vibes or content, there is a place for you.`,
    },
    {
      question: "Are my messages private and secure?",
      answer: `Yes, your messages are protected with end-to-end encryption. Only you and the person you're chatting with can read them. Not even we can see them.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8 px-[5%] mx-auto mb-16">
      <div className="md:w-1/3">
        <h2 className="text-2xl md:text-[3rem] font-bold text-navy-800 mb-4 max-w-[50%]">
          Maybe you&apos;re Wondering
        </h2>
        <p className="text-gray-500 text-sm md:text-[16px] w-full md:max-w-[60%] opacity-60 leading-snug md:leading-loose">
          We get it, Web3 stuff can seem like a complicated game of puzzle. So
          we broke it down. Quick answers, no fluff, just what you actually
          wanna know.
        </p>
      </div>

      {/* Right side - FAQ items */}
      <div className="md:w-2/3 space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg relative cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center justify-between p-6">
              <h3 className="text-sm md:text-lg font-semibold">
                {item.question}
              </h3>
              <div className="relative">
                <div
                  className={`transition-transform duration-500 ${openIndex === index ? "rotate-360" : "rotate-0"
                    }`}
                >
                  <Image
                    src={flameicon}
                    width={20}
                    height={20}
                    alt="star icon"
                    className="w-[20px] md:w-[30px]"
                  />
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="p-6 pt-0">
                <p className="text-gray-600 text-sm md:text-[16px] max-w-[60rem]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
