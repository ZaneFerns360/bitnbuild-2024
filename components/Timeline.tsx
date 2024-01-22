'use client'

import React, { useRef } from 'react'
import './Timeline.css'
import Image from 'next/image'
import { fadeIn } from '@variants'
import { motion, useScroll, useTransform } from 'framer-motion'
import Sechedule from '@public/assets/Schedule.png';

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div className="relative flex h-full items-center justify-center md:px-4">
       <div className='absolute inset-0 z-0 bg-cover  people-blur'></div>
      <section className="wrap relative h-full overflow-hidden p-5">
            <Image
              className="mx-auto text-center pb-8"
              src={Sechedule}
              width={250}
              height={250}
              alt="timeline"
            />
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className=''>
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} className="bg-white rounded-xl p-4 timeline-start md:text-start mb-10">
              <div className="text-lg font-black">January 22nd - February 9th</div>
              <div className="">Registration for Internal State Hackathon. Teams All across the globe will register for this Phase 1 of the hackathon and only few will be selected for the Phase 2, that is the Final Round.</div>
              
            </motion.div>
            <hr />
          </li>
          <li className=''>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-end mb-10">
              <div className="text-lg font-black">February 10th</div>
              <time className="font-mono text-lg font-black">4:30 PM</time>
              <div className="">Inauguration Ceremony and release of problem statement. The rules for the Hackathon and the timeline will be breifly explained by the organisers.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-start md:text-start mb-10">
              <div className="text-lg font-black">February 10th</div>
              <time className="font-mono text-lg font-black">5:00 PM</time>
              <div className="">Hackathon Begins. The team can now start implementing their projects based on the released problem statements and prepare for presenting them to the Judges/Mentors.</div>           
            </div>
            <hr />
          </li>
          <li className=''>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-end mb-10">
            <div className="text-lg font-black">February 10th</div>
              <time className="font-mono text-lg font-black">5:00 PM - 6:00 PM</time>
              <div className="">During this time, The teams have to share their GitHub repository of the Project to the organising team so that they have a track of their work.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-start md:text-start mb-10">
            <div className="text-lg font-black">February 10th</div>
              <time className="font-mono text-lg font-black">9:00 PM</time>
              <div className="">Mentoring Sessions will begin for all the teams. The mentors will review your progress and convey some points and places to improve before the first judging round.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-end mb-10">
            <div className="text-lg font-black">February 11th</div>
              <time className="font-mono text-lg font-black">8:00 AM</time>
              <div className="">Judging Round 1 begins. In this the team will present their project to the panel and take inputs from them. They could ask you to implement some more features. Only few team will progress to the next Juding Round.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-start md:text-start mb-10">
            <div className="text-lg font-black">February 11th</div>
              <time className="font-mono text-lg font-black">2:00 PM</time>
              <div className="">Judging Round 2 begins. In this, the teams will present their project to the panel one last time and the winners will progress to the Phase 2, that is the Finals.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-end mb-10">
            <div className="text-lg font-black">February 11th</div>
              <time className="font-mono text-lg font-black">4:30 PM</time>
              <div className="">Results of the Internal Hackathon will be announced. 9 Teams from the State will Represent thier State in the Final Round of Bit n Build.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-start md:text-start mb-10">
            <div className="text-lg font-black">February 24th</div>
              {/* <time className="font-mono text-lg font-black">2:00 PM</time> */}
              <div className="">The Teams from all over the State will Arrive in Mumbai, Bandra for the Finals of Bit n Build.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-end mb-10">
            <div className="text-lg font-black">February 24th - February 25th</div>
              {/* <time className="font-mono text-lg font-black">4:30 PM</time> */}
              <div className="">The Teams Qualified through the State Level Internal Hackathons and the International Teams will compete in this 24 Hours Bit n Build.</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="bg-white rounded-xl p-4 timeline-start md:text-start mb-10">
            <div className="text-lg font-black">February 25th</div>
            <div className="">The Results Of Bit n Buil 2024 will be Announced after 24 hours. The Winners will be Awarded with the Prizes Mentoned in the Prizes section.</div>          
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}
