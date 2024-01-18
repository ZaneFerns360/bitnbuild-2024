import React from 'react'
import { Bungee } from 'next/font/google'
import Image from 'next/image'
import PrizesImg from '@public/assets/tracks.png'
import Prizes1 from '@public/assets/prizes/podium.png'
import Prizes2 from '@public/assets/prizes/2ndPrizes.png'
import Prizes3 from '@public/assets/prizes/3rdPrizes.png'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

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
      <div className="">
        
        <div className="px-5 text-center max-md:hidden md:mt-8">
          <Image
            className=""
            src={Prizes1}
            width={800}
            height={400}
            alt="prize1"
          />
          <div className="leading-relaxed flex gap-12 items-center justify-center">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-yellow-700 sm:text-3xl'
              }
            >
              ₹ 25,000
            </p>
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-yellow-700 sm:text-3xl'
              }
            >
              ₹ 50,000
            </p>
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-yellow-700 sm:text-3xl'
              }
            >
              ₹ 10,000
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
