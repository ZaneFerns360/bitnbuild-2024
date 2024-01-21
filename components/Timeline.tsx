'use client'

import React, { useRef } from 'react'
import './Timeline.css'
import Image from 'next/image'
import { fadeIn } from '@variants'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div className="relative" ref={ref}>
      <div className="people-blur absolute inset-0 z-0 bg-cover bg-bottom"></div>
      <section className="relative z-10 mx-2">
        <div className="mx-auto max-w-md pt-32 text-center">
          <Image
            className="mx-auto text-center"
            src="/assets/Schedule.png"
            width={300}
            height={300}
            alt="about-us"
          />
        </div>
        <div className="flex h-full items-center justify-center pb-20 pt-12">
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start timeline-box">
                <h4 className="text-xl font-bold text-black">
                  January 28th - February 5th
                </h4>
                <p>Registration for Internal State Hackathon.</p>
              </div>
              <div className="timeline-middle"></div>
              <hr />
            </li>
            {/* Repeat similar structure for other events */}
            <li>
              <hr />
              <div className="timeline-middle "></div>
              <div className="timeline-end timeline-box">
                <h4 className="text-xl font-bold text-black">February 10th</h4>
                <p> Hackathon begins</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">
                <h4 className="text-xl font-bold text-black">February 12th</h4>
                <p>Internal hackathon results</p>
              </div>
              <div className="timeline-middle"></div>
              <hr />
            </li>
            {/* Additional items can be added similarly */}
            <li>
              <hr />
              <div className="timeline-end timeline-box">
                <h4 className="text-xl font-bold text-black">February 24th</h4>
                <p>National Teams Arrive to Mumbai.</p>
              </div>
              <div className="timeline-middle"></div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle "></div>
              <div className="timeline-start timeline-box">
                <h4 className="text-xl font-bold text-black">
                  February 24th - February 25th
                </h4>
                <p>
                  Grand Finale at Fr. Conceicao Rodrigues College of
                  Engineering.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-end timeline-box">
                <h4 className="text-xl font-bold text-black">February 25th</h4>
                <p>Final Results of BitNBuild Hackathon.</p>
              </div>
              <div className="timeline-middle"></div>
              <hr />
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
