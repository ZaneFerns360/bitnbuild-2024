'use client'

import React from 'react'
import './Timeline.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@variants'

const Timeline = () => (
  <div className="bg-cover bg-bottom bg-no-repeat">
    <div className="mx-auto max-w-md py-5 text-center">
      <Image
        className="mx-auto text-center"
        src="/assets/Schedule.png"
        width={300}
        height={300}
        alt="about-us"
      />
    </div>

    <div className="flex h-full items-center justify-center ">
      <div className="wrap relative h-full overflow-hidden p-10">
        {/* right timeline */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="right-timeline mb-8 flex w-full items-center justify-between"
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-8 w-8 mr-1 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
          </div>
          <div className="cards-right order-1 w-auto rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">
              January 28th-February 5th
            </h3>
            <p className="text-sm leading-snug tracking-wide text-white ">
              Registration for Internal State Hackathon.
            </p>
          </div>
        </motion.div>
        {/* left timeline */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between"
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-8 w-8 ml-1 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
          </div>
          <div className="cards-right order-1 w-auto rounded-lg bg-red-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">February 10th</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Hackathon Begins.
            </p>
          </div>
        </motion.div>
        {/* right timeline */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          className="right-timeline mb-8 flex w-full items-center justify-between"
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-8 w-8 mr-1 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
          </div>
          <div className="cards-right order-1 w-auto rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">February 10th</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Internal Hackathon Results.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
)

export default Timeline
