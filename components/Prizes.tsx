import React from 'react'

import { Bungee } from 'next/font/google'
import Image from 'next/image'
const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const Prizes = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="py-2">
        <h1
          className={
            bungee.className +
            ' my-2 text-center text-4xl font-bold sm:text-7xl'
          }
        >
          Prizes
        </h1>
      </div>
      <div className="mx-auto max-w-sm py-5 text-center">
        <Image
          className="mx-auto text-center"
          src="/assets/minecraft-podium.png"
          width={200}
          height={200}
          alt="about-us"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-2">
        {/* 1st place content */}
        <div className="px-5 text-center">
          <h2
            className={
              bungee.className +
              ' mb-5 text-4xl font-bold text-blue-500 max-sm:py-10 sm:py-4 sm:text-5xl'
            }
          >
            1st Place
          </h2>
          <div className="leading-relaxed">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-green-500 sm:text-3xl'
              }
            >
              ₹ 50,000
            </p>
          </div>
        </div>

        {/* 2nd place content */}
        <div className="px-5 text-center">
          <h2
            className={
              bungee.className +
              ' mb-5 text-4xl font-bold text-purple-500 max-sm:py-10 sm:py-4 sm:text-5xl'
            }
          >
            2nd Place
          </h2>
          <div className="leading-relaxed">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-red-500 sm:text-3xl'
              }
            >
              ₹ 25,000
            </p>
          </div>
        </div>
        {/* 3rd place content */}
        <div className="px-5 text-center">
          <h2
            className={
              bungee.className +
              ' mb-5 text-4xl font-bold text-yellow-500 max-sm:py-10 sm:py-4 sm:text-5xl'
            }
          >
            3rd Place
          </h2>
          <div className="leading-relaxed">
            <p
              className={
                bungee.className +
                ' text-1xl my-3 mt-2 text-pink-500 sm:text-3xl'
              }
            >
              ₹ 15,000
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
