'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
      transition={{ duration: 0.7 }}
      ref={ref1}
    >
      <div className="mx-auto flex w-4/6 flex-col  items-center justify-center text-center max-sm:h-fit md:px-5 md:pb-24 md:pt-48">
        <h2 className="mb-5 text-4xl font-bold max-sm:pt-20 sm:pb-8 sm:text-7xl">
          About Technothon 2024⚡
        </h2>
        <div className="leading-relaxed">
          <p className="text-1xl mb-5 sm:text-3xl">
            {
              'Mumbai polytechnic students, get ready for Technothon 2024! A 24-hour hackathon full of excitement and creativity.'
            }
          </p>
          <p className="text-1xl mb-5 sm:text-3xl">
            {
              'Technothon is your chance to shine as a developer. Build from scratch, compete, and unlock your potential. Are you up for the challenge?'
            }
          </p>
          <p className="text-1xl sm:text-3xl">
            {
              'This year, we introduce Blind Bet Registration! Register, discover your challenges on the spot, and embark on an exciting journey at Technothon 2024.'
            }
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
