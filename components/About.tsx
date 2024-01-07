'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bungee } from 'next/font/google'
import Image from 'next/image'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const About = () => {
  const [ref1, inView1] = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  }

  return (
    <motion.div
      animate={inView1 ? 'visible' : 'hidden'}
      variants={variants}
      exit="hidden"
      transition={{ duration: 1.0 }}
      ref={ref1}
    >
      <div className="flex w-full flex-col items-center justify-center text-center max-sm:h-fit md:flex-row md:space-x-10 md:px-5 md:pb-24 md:pt-48">
        <div>
          <h2
            className={
              bungee.className +
              ' mb-5 text-4xl font-bold max-sm:pt-20 sm:pb-8 sm:text-7xl'
            }
          >
            BitnBuild 2024⚡
          </h2>
          <div className="leading-relaxed">
            <p className={bungee.className + ' text-1xl mb-5 sm:text-3xl'}>
              Welcome to BitnBuild 2024, a global hackathon in Mumbai! A 24-hour
              event full of creativity, like a Minecraft world.
            </p>
            <p className={bungee.className + ' text-1xl mb-5 sm:text-3xl'}>
              BitnBuild is your chance to shine as a developer. Are you ready to
              compete with the best and unlock your potential?
            </p>
          </div>
        </div>
        <div className="h-full">
          <Image
            src="/assets/about.png"
            width={3000}
            height={3000}
            alt="About BitnBuild"
            className="h-full w-full object-cover md:h-auto md:w-auto"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default About
