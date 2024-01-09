import React from 'react'

import { Bungee } from 'next/font/google';

const bungee = Bungee({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });

export const Prizes = () => {
  return (
    <div className=''>
        <div className='py-2'>
            <h1 className='text-center my-2'>Prizes</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2'>
            {/* left content */}
            <div className="px-5 text-justify">
              <h2
                className={
                  bungee.className +
                  ' mb-5 text-4xl font-bold max-sm:py-10 sm:py-4 sm:text-5xl text-center md:text-justify'
                }
              >
                BitnBuild 2024⚡
              </h2>
              <div className="leading-relaxed">
                <p className={bungee.className + ' text-1xl mt-2 my-3 sm:text-3xl'}>
                  BitnBuild is your chance to shine as a developer. Are you ready to
                  compete with the best and unlock your potential?
                </p>
              </div>
            </div>
            <div className="px-5 text-justify">
              <h2
                className={
                  bungee.className +
                  ' mb-5 text-4xl font-bold max-sm:py-10 sm:py-4 sm:text-5xl text-center md:text-justify'
                }
              >
                BitnBuild 2024⚡
              </h2>
              <div className="leading-relaxed">
                <p className={bungee.className + ' text-1xl mt-2 my-3 sm:text-3xl'}>
                  BitnBuild is your chance to shine as a developer. Are you ready to
                  compete with the best and unlock your potential?
                </p>
              </div>
            </div>
            <div className="px-5 text-justify">
              <h2
                className={
                  bungee.className +
                  ' mb-5 text-4xl font-bold max-sm:py-10 sm:py-4 sm:text-5xl text-center md:text-justify'
                }
              >
                BitnBuild 2024⚡
              </h2>
              <div className="leading-relaxed">
                <p className={bungee.className + ' text-1xl mt-2 my-3 sm:text-3xl'}>
                  BitnBuild is your chance to shine as a developer. Are you ready to
                  compete with the best and unlock your potential?
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}
