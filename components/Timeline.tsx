'use client'

import React from 'react'
import './Timeline.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@variants'

const Timeline = () => (
  <div className="bg-cover bg-bottom bg-no-repeat">
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
            <p >
              Registration for Internal State Hackathon.
            </p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        {/* Repeat similar structure for other events */}
        <li>
          <hr />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
            <h4 className="text-xl font-bold text-black">
              February 10th
            </h4>
            <p > Hackathon begins</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box">
            <h4 className="text-xl font-bold text-black">February 12th</h4>
            <p>Internal hackathon results</p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        {/* Additional items can be added similarly */}
        <li>
          <hr />
          <div className="timeline-end timeline-box">
            <h4 className="text-xl font-bold text-black">
              February 24th
            </h4>
            <p>
              National Teams Arrive to Mumbai.
            </p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start timeline-box">
            <h4 className="text-xl font-bold text-black">
              February 24th - February 25th
            </h4>
            <p >
              Grand Finale at Fr. Conceicao Rodrigues College of Engineering.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box">
            <h4 className="text-xl font-bold text-black">
              February 25th
            </h4>
            <p >
              Final Results of BitNBuild Hackathon.
            </p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
)

export default Timeline
