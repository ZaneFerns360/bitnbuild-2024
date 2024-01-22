'use client'

import React from 'react'
import './Timeline.css'
import { motion } from 'framer-motion'
import { fadeIn } from '@variants'

const Timeline2 = () => (
  <div className="flex h-full items-center justify-center">
    <div className="wrap relative h-full overflow-hidden p-5">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li className=''>
          <div className="timeline-middle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="bg-white rounded-xl p-4 timeline-start md:text-end mb-10">
            <time className="font-mono text-lg font-black">January 28th - February 5th</time>
            <div className="">Registration for Internal State Hackathon.</div>
            
          </div>
          <hr />
        </li>
        <li className=''>
          <hr />
          <div className="timeline-middle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="bg-white rounded-xl p-4 timeline-end mb-10">
            <time className="font-mono text-lg font-black">February 10th</time>
            <div className="">Hackathon begins</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="bg-white rounded-xl p-4 timeline-start md:text-end mb-10">
            <time className="font-mono ">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
          </div>
          <hr />
        </li>
        <li className=''>
          <hr />
          <div className="timeline-middle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="bg-white rounded-xl p-4 timeline-end mb-10">
            <time className="font-mono text-lg font-black">February 10th</time>
            <div className="">Hackathon begins</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="bg-white rounded-xl p-4 timeline-start md:text-end mb-10">
            <time className="font-mono ">2001</time>
            <div className="text-lg font-black">iPod</div>
            The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="bg-white rounded-xl p-4 timeline-end mb-10">
            <time className="font-mono ">2007</time>
            <div className="text-lg font-black">iPhone</div>
            iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="bg-white rounded-xl p-4 timeline-start md:text-end mb-10">
            <time className="font-mono ">2015</time>
            <div className="text-lg font-black">Apple Watch</div>
            
          </div>
        </li>
      </ul>
    </div>
  </div>
)

export default Timeline2
