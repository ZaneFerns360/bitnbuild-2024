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
        className="absolute inset-0 z-40 pt-8 "
        transition={{ type: 'spring', stiffness: 50, damping: 5000 }}
      >
        <div className="inset-0 z-20 flex flex-col items-center justify-center space-y-5 p-4 pt-8 md:pt-5">
          <Image
            alt="GG"
            width={500}
            height={500}
            src="/assets/mc.png"
            priority={true}
          ></Image>
          <button className="btn">Sign Up</button>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10"
        transition={{ type: 'spring', stiffness: 50, damping: 5000 }}
        style={{
          backgroundImage: `url(/assets/site-bg-3.png)`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-40 w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/site2.png)`,
          backgroundPosition: 'top',
          pointerEvents: 'none',
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
