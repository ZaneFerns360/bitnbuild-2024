'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Link from 'next/link'
import '@components/button.css'
import NavBar from './NavBar'
import Unstop from '@public/assets/unstop.png'
import Router from 'next/navigation'
import { useRouter } from 'next/router'

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
        style={{ y: textY, pointerEvents: 'none' }}
        className="absolute inset-0 z-50 pt-8 "
        transition={{ type: 'spring', stiffness: 50, damping: 5000 }}
      >
        <div className="inset-0 z-20 flex flex-col items-center justify-center space-y-5 p-4 pt-6">
          <Image
            alt="GG"
            width={400}
            height={400}
            src="/assets/BnB-2.png"
            priority={true}
            className="z-0"
          />
          <Link
            className="btn pointer-events-auto"
            href={
              'https://drive.google.com/file/d/1dIahrcO5Y_b1z8hAUDB2C0dHCgUim3MO/view?usp=sharing'
            }
            target="_blank"
          >
            Problem Statements{' '}
          </Link>
          <motion.div
            animate={{ y: ['0px', '50px', '-50px', '0px'] }}
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
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10"
        transition={{ type: 'spring', stiffness: 50, damping: 5000 }}
        style={{
          backgroundImage: `url(/assets/water.jpg)`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          pointerEvents: 'none',

          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20 w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/assets/water.jpg)`,
          backgroundPosition: 'top',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent, #1a1c28)',
            backgroundPosition: 'bottom',
          }}
        />
      </div>
    </div>
  )
}
