import React from 'react'
import { Bungee } from 'next/font/google'
import Image from 'next/image'
import PrizesImg from '@public/assets/tracks.png'
import Prizes1 from '@public/assets/prizes/1stPrizes.png'
import Prizes2 from '@public/assets/prizes/2ndPrizes.png'
import Prizes3 from '@public/assets/prizes/3rdPrizes.png'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const Prizes = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[url('/assets/img/mine.jpg')]  bg-cover bg-top bg-no-repeat py-5">
      {/* <div className="mx-auto max-w-md py-4 text-center">
        <Image
          className="mx-auto text-center"
          src={PrizesImg}
          width={250}
          height={250}
          alt="Prizes"
        />
      </div> */}
      <div className="mx-auto max-w-sm py-5 text-center">
        <Image
          className="mx-auto text-center"
          src="/assets/Prizes.png"
          width={250}
          height={250}
          alt="Prizes"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
        {/* 1st place content */}
        <div className="px-5 text-center max-md:hidden md:mt-8">
          <Image
            className=""
            src={Prizes2}
            width={400}
            height={400}
            alt="prize1"
          />
          <div className="leading-relaxed">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-yellow-500 sm:text-3xl'
              }
            >
              ₹ 25,000
            </p>
          </div>
        </div>

        {/* 2nd place content */}
        <div className="px-5 text-center">
          <Image
            className=""
            src={Prizes1}
            width={400}
            height={400}
            alt="prize1"
          />
          <div className="leading-relaxed">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-yellow-500 sm:text-3xl'
              }
            >
              ₹ 50,000
            </p>
          </div>
        </div>

        <div className="px-5 text-center md:mt-8 md:hidden">
          <Image
            className=""
            src={Prizes2}
            width={400}
            height={400}
            alt="prize1"
          />
          <div className="leading-relaxed">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-yellow-500 sm:text-3xl'
              }
            >
              ₹ 25,000
            </p>
          </div>
        </div>
        {/* 3rd place content */}
        <div className="px-5 text-center md:mt-10">
          <Image
            className=""
            src={Prizes3}
            width={400}
            height={400}
            alt="prize1"
          />
          <div className="leading-relaxed">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-yellow-500 sm:text-3xl'
              }
            >
              ₹ 15,000
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
