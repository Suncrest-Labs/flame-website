"use client"

import { useState } from 'react';
import Image from 'next/image';
import star from '../../../public/Images/star.png';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What makes Flame unique?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      question: "How can I earn on Flame?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      question: "Is my data private?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      question: "How do I join?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8 px-[5%] mx-auto mb-16">
      <div className="md:w-1/3">
        <h2 className="text-[3rem] font-bold text-navy-800 mb-4 max-w-[50%]">Frequently Asked Questions</h2>
        <p className="text-gray-500 max-w-[45%] opacity-60 leading-loose">
          Find quick answers to common queries in our FAQs section, designed to address your most pressing questions and provide you with the information you need.
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
              <h3 className="text-lg font-medium">{item.question}</h3>
              <div className="relative">
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  <Image src={star} width={30} height={30} alt="star icon" />
                </div>
              </div>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="p-6 pt-0">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;