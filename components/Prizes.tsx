import React from 'react';
import { Bungee } from 'next/font/google';
import Image from 'next/image';
import Prizes1 from '@public/assets/prizes/podium-2.png';
import Grass from '@public/assets/Arrow.png'
import Grass2 from '@public/assets/Arrow2.png'
import { GiTrophy, GiTrophyCup } from "react-icons/gi";
import { HiMiniTrophy } from "react-icons/hi2";
import './Prizes.css'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const Prizes = () => {
  return (
    <div className='relative'>
      <div className='hidden md:inline absolute inset-0 z-0 bg-cover prizes-blur'></div>
      <section className="relative flex flex-col items-center justify-center md:py-28">
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
        <div className="px-4 text-center md:mt-0">
          
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-8 justify-center items-center md:my-0 my-5 md:px-72 py-8'>
            <div className="bg-slate-700 px-4 py-10 rounded-lg shadow-md hover:bg-slate-600 md:order-2 hover:border-b-4  hover:border-amber-400">
              <GiTrophy className='text-amber-500 mx-auto my-4 text-5xl'/>
              <h2 className="text-2xl text-white font-bold">I Place</h2>
              <p className="text-white text-3xl font-bold">₹30,000</p>
              <p className="text-slate-300 my-5">Winners will not only bask in the glory of success but also take home enticing rewards, including cash prizes, vouchers, goodies, and a plethora of other exciting surprises.</p>
            </div>
            <div className="bg-slate-700 px-4 py-10 rounded-lg shadow-md hover:bg-slate-600 md:order-1 hover:border-b-4  hover:border-gray-200">
            <HiMiniTrophy className='text-slate-300 mx-auto my-4 text-5xl'/>
              <h2 className="text-2xl text-white font-bold">II Place</h2>
              <p className="text-white text-3xl font-bold">₹20,000</p>
              <p className="text-slate-300 my-5">Winners will not only bask in the glory of success but also take home enticing rewards, including cash prizes, vouchers, goodies, and a plethora of other exciting surprises.</p>
            </div>
            <div className="bg-slate-700 px-4 py-10 rounded-lg shadow-md hover:bg-slate-600 md:order-3 hover:border-b-4  hover:border-amber-600">
              <GiTrophyCup className='text-amber-600 mx-auto my-4 text-5xl'/>
              <h2 className="text-2xl text-white font-bold">III Place</h2>
              <p className="text-white text-3xl font-bold">₹10,000</p>
              <p className="text-slate-300 my-5">Winners will not only bask in the glory of success but also take home enticing rewards, including cash prizes, vouchers, goodies, and a plethora of other exciting surprises.</p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};
