import React from 'react'
import { Bungee } from 'next/font/google'
import Image from 'next/image'
import Prizes1 from '@public/assets/prizes/podium-2.png'
import Grass from '@public/assets/Arrow.png'
import Grass2 from '@public/assets/Arrow2.png'
import { GiTrophy, GiTrophyCup } from 'react-icons/gi'
import { HiMiniTrophy } from 'react-icons/hi2'
import './Prizes.css'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const Prizes = () => {
  return (
    <div className="relative">
      <div className="prizes-blur absolute inset-0 z-0 hidden bg-cover md:inline"></div>
      <section
        className="relative flex flex-col items-center justify-center md:py-28"
        id="prizes"
      >
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
          <div className="my-5 grid grid-cols-1 items-center justify-center gap-4 py-8 md:my-0 md:grid-cols-3 md:gap-8 md:px-72">
            <div className="rounded-lg bg-slate-700 px-4 py-10 shadow-md hover:border-b-4 hover:border-amber-400 hover:bg-slate-600  md:order-2">
              <GiTrophy className="mx-auto my-4 text-5xl text-amber-500" />
              <h2 className="text-2xl font-bold text-white">I Place</h2>
              <p className="text-3xl font-bold text-white">₹50,000</p>
              <p className="my-5 text-slate-300">
                Winners will not only bask in the glory of success but also take
                home enticing rewards, including cash prizes, vouchers, goodies,
                and a plethora of other exciting surprises.
              </p>
            </div>
            <div className="rounded-lg bg-slate-700 px-4 py-10 shadow-md hover:border-b-4 hover:border-gray-200 hover:bg-slate-600  md:order-1">
              <HiMiniTrophy className="mx-auto my-4 text-5xl text-slate-300" />
              <h2 className="text-2xl font-bold text-white">II Place</h2>
              <p className="text-3xl font-bold text-white">₹30,000</p>
              <p className="my-5 text-slate-300">
                Winners will not only bask in the glory of success but also take
                home enticing rewards, including cash prizes, vouchers, goodies,
                and a plethora of other exciting surprises.
              </p>
            </div>
            <div className="rounded-lg bg-slate-700 px-4 py-10 shadow-md hover:border-b-4 hover:border-amber-600 hover:bg-slate-600  md:order-3">
              <GiTrophyCup className="mx-auto my-4 text-5xl text-amber-600" />
              <h2 className="text-2xl font-bold text-white">III Place</h2>
              <p className="text-3xl font-bold text-white">₹20,000</p>
              <p className="my-5 text-slate-300">
                Winners will not only bask in the glory of success but also take
                home enticing rewards, including cash prizes, vouchers, goodies,
                and a plethora of other exciting surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
