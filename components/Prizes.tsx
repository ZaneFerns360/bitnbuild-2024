import React from 'react';
import { Bungee } from 'next/font/google';
import Image from 'next/image';
import Prizes1 from '@public/assets/prizes/podium-2.png';
import Grass from '@public/assets/blocks.png'
import Grass2 from '@public/assets/blocks2.png'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const Prizes = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="mx-auto max-w-sm py-5 text-center">
        <Image
          className="mx-auto text-center"
          src="/assets/Prizes.png"
          width={250}
          height={250}
          alt="Prizes"
        />
      </div>

      {/* Static Grid of Prize1 Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 text-center md:mt-0">
        <div>
          <Image
            className="mx-auto hidden md:inline opacity-95"
            src={Grass}
            width={250}
            height={200}
            alt="prize1"
          />
        </div>
        <div>
          <Image
            className="mx-auto"
            src={Prizes1}
            width={500}
            height={300}
            alt="prize1"
          />
          <div className="leading-relaxed flex gap-5 md:gap-6 items-center justify-center">
            {/* Prize Amounts */}
            <p
              className={
                bungee.className +
                ' text-xl my-3 mt-10 text-slate-100 sm:text-3xl'
              }
            >
              ₹ 25,000
            </p>
            <p
              className={
                bungee.className +
                ' text-xl my-3 mt-0 text-slate-100 sm:text-3xl'
              }
            >
              ₹ 50,000
            </p>
            <p
              className={
                bungee.className +
                ' text-xl my-3 mt-10 text-slate-100 sm:text-3xl'
              }
            >
              ₹ 10,000
            </p>
          </div>
        </div>
        <div>
          <Image
            className="mx-auto hidden md:inline opacity-95"
            src={Grass2}
            width={250}
            height={200}
            alt="prize1"
          />
        </div>
      </div>
    </section>
  );
};
