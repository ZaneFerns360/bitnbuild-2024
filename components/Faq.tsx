import React from 'react';
import Image from 'next/image';
import { Bungee } from 'next/font/google';
import FAQImg from '@public/assets/FAQ.png';
import './Faq.css'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// Define an array of FAQ items
const faqItems = [
  {
    question: 'What is a hackathon?',
    answer:
      'Hacking is a creative way to solve a problem, and hackathons are innovation marathons where students from around the country who have an interest in technology come together to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere.',
  },
  {
    question: 'How many people per team?',
    answer: 'Teams can range anywhere from 2-4 people.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Bit N Build is free for all hackers! We provide our hackers with tools, swags, and prizes without any cost through our generous sponsors.',
  },
  {
    question: 'Who can participate? Are there any required skills?',
    answer:
      'Anyone is welcome to participate in this event. While experience coding and programming is a huge plus, teams will also need people with strong presentation skills and brilliant ideas.',
  },
  {
    question: 'Will there be food?',
    answer: 'Yes, delicious food and beverages will be provided throughout the event.',
  },
  {
    question: 'Who will be judging?',
    answer: 'The judge panel composition will be announced closer to the date of the hackathon.',
  },
  {
    question: 'Any more queries?',
    answer: 'Reach out to us on any social media platform.',
  },
];

export const Faq = () => {
  return (
    <>
      <div className='relative'>
        <div className='absolute inset-0 z-0 bg-cover bg-bottom faq-blur'></div>
        <section className="relative z-10 py-3 md:py-10 text-gray-900" id="FAQ">
          <div className="mx-auto max-w-sm pt-4 text-center">
            <Image
              className="mx-auto text-center"
              src={FAQImg}
              width={150}
              height={150}
              alt="about-us"
            />
          </div>

          <div className="container mx-auto px-5 py-3">
            <div className="my-10 text-center">
              <h1 className="title-font border-text mb-4 text-center text-2xl font-semibold text-red-700 sm:text-4xl">
                Some common questions were often asked
              </h1>
              <p className="mx-auto leading-relaxed text-white sm:text-2xl lg:w-3/4 xl:w-2/4">
                The most common questions about how our hackathon will be conducted
              </p>
            </div>
            <div className="-mx-2 flex flex-wrap sm:mb-2 ">
              {faqItems.map((item, index) => (
                <div key={index} className="w-full px-4 py-2 lg:w-1/2">
                  <details className="mb-4">
                    <summary className="rounded-md  bg-slate-100 px-4 py-3 font-semibold">
                      {item.question}
                    </summary>
                    <span className="block rounded-md bg-white px-4 py-3">{item.answer}</span>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Faq;
