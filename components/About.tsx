'use client'
// Import React and other required modules
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bungee } from 'next/font/google'
import Image from 'next/image'
import AboutImg from '@public/assets/about.png'

// Define the Bungee font
const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// About functional component
const About = () => {
  // Hook to check if the component is in view
  const [ref1, inView1] = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  // Variants for animation
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  }

  // JSX structure with grid layout
  return (
    <div
      className="bg-gradient-to-b from-yellow-800 to-orange-950 py-5 "
      id="about"
    >
      <motion.div
        animate={inView1 ? 'visible' : 'hidden'}
        variants={variants}
        exit="hidden"
        transition={{ duration: 1.0 }}
        ref={ref1}
        className=" mt-10 items-center justify-center max-sm:h-fit md:mt-0 md:px-5 md:py-20 "
      >
        {/* Top Section with AboutImg */}
        <div className="mx-auto max-w-sm py-5 text-center">
          <Image
            className="mx-auto text-center"
            src={AboutImg}
            width={200}
            height={200}
            alt="about-us"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2">
          {/* Bottom Section with Text and Image Grid */}
          <div className="px-5 text-justify">
            <h2
              className={
                bungee.className +
                ' mb-5 text-center text-4xl font-bold text-white max-sm:py-10 sm:py-4 sm:text-7xl md:text-justify'
              }
            >
              BitnBuild 2024⚡
            </h2>
            <div className="leading-relaxed">
              <p
                className={
                  bungee.className + ' text-1xl my-3 text-white sm:text-3xl'
                }
              >
                Welcome to BitnBuild 2024, a global hackathon in Mumbai! A
                24-hour event full of creativity, like a Minecraft world.
              </p>
              <p
                className={
                  bungee.className +
                  ' text-1xl my-3 mt-2 text-white sm:text-3xl'
                }
              >
                BitnBuild is your chance to shine as a developer. Are you ready
                to compete with the best and unlock your potential?
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="mx-5 h-full py-3">
            <Image
              src="/assets/minecraft-mob.png"
              width={3000}
              height={3000}
              alt="About BitnBuild"
              className="h-full w-full object-cover md:h-auto md:w-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Export the About component as the default export
export default About
