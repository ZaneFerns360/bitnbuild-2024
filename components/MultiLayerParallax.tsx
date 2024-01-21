'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Link from 'next/link'
import '@components/button.css'
import NavBar from './NavBar'

export default function MultiLayerParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div
      ref={ref}
      className="relative grid min-h-screen w-full place-items-center overflow-hidden"
    >
      <motion.div
        style={{ y: textY }}
        className="inset-0 z-30 pt-8 "
        transition={{ type: 'spring', stiffness: 50, damping: 5000 }}
      >
        <div className="inset-0 z-50 flex flex-col items-center justify-center space-y-8 md:space-y-5 p-4 pt-28 md:pt-5">
          <Image
            alt="GG"
            width={450}
            height={450}
            src="/assets/BnB-2.png"
            priority={true}
          ></Image>
          <motion.div
            animate={{ y: ['0px', '50px', '0px', '-50px', '0px'] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <Image
              alt="GG"
              width={450}
              height={450}
              src="/assets/alex.webp"
              priority={true}
            />
          </motion.div>
          <button className="btn pointer-events-auto">Apply with Unstop</button>
        </div>
      </motion.div>

      <div
        className="absolute inset-0 z-20 w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/water.jpg)`,
          backgroundPosition: 'top',
        }}
      >
        <div className="pointer-events-auto">
          {' '}
          <NavBar />
        </div>
      </div>
    </div>
  )
}