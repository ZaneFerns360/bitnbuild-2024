import React from 'react';
import { Bungee } from 'next/font/google';
import Image from 'next/image';
import Prizes1 from '@public/assets/prizes/podium-2.png';
import Grass from '@public/assets/Arrow.png'
import Grass2 from '@public/assets/Arrow2.png'
import { GiTrophy, GiTrophyCup } from "react-icons/gi";
import { HiMiniTrophy } from "react-icons/hi2";


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
      <div className="grid grid-cols-1 md:grid-cols-3 gap- px-4 text-center md:mt-0">
        <div>
          <Image
            className="mx-auto hidden md:inline opacity-95"
            src={Grass2}
            width={500}
            height={200}
            alt="prize1"
            style={{opacity:0.3}}
          />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 justify-center items-center md:my-0 my-5'>
        <div className="bg-slate-700 p-10 rounded-lg shadow-md hover:bg-slate-600 md:order-2 ">
            <GiTrophy className='text-amber-500 mx-auto my-4 text-5xl'/>
            <h2 className="text-2xl text-white font-bold">I Place</h2>
            <p className="text-white">₹50,000</p>
          </div>
          <div className="bg-slate-700 p-10 rounded-lg shadow-md hover:bg-slate-600 md:order-1 md:mt-2">
          <HiMiniTrophy className='text-slate-300 mx-auto my-4 text-5xl'/>
            <h2 className="text-2xl text-white font-bold">II Place</h2>
            <p className="text-white">₹25,000</p>
          </div>
          <div className="bg-slate-700 p-10 rounded-lg shadow-md hover:bg-slate-600 md:order-3 md:mt-2">
            <GiTrophyCup className='text-amber-700 mx-auto my-4 text-5xl'/>
            <h2 className="text-2xl text-white font-bold">III Place</h2>
            <p className="text-white">₹10,000</p>
          </div>
        </div>
        <div>
          <Image
            className="mx-auto hidden md:inline opacity-95"
            src={Grass}
            width={500}
            height={200}
            alt="prize1"
            style={{opacity:0.3}}
          />
        </div>
      </div>
    </section>
  );
};
