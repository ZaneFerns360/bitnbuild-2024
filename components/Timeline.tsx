'use client'

import React, { useRef } from 'react'
import './Timeline.css'
import Image from 'next/image'
import { fadeIn } from '@variants'
import { motion, useScroll, useTransform } from 'framer-motion'
import Sechedule from '@public/assets/Schedule.png'

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
      <div className="people-blur absolute inset-0 z-0  bg-cover"></div>
      <section className="wrap relative h-full overflow-hidden p-5">
        <Image
          className="mx-auto pb-8 text-center"
          src={Sechedule}
          width={250}
          height={250}
          alt="timeline"
        />
        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
          <li className="">
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-start mb-10 rounded-xl bg-white p-4 md:text-start"
            >
              <div className="text-lg font-black">
                January 22nd - February 10th
              </div>
              <div className="">
                Registration for Internal State Hackathon. Teams all across the
                globe will register for this Phase 1 of the hackathon and only
                few will be selected for the Phase 2, that is the Final Round.
              </div>
            </motion.div>
            <hr />
          </li>
          <li className="">
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-end mb-10 rounded-xl bg-white p-4"
            >
              <div className="text-lg font-black">February 17th</div>
              <time className="font-mono text-lg font-black">4:30 PM</time>
              <div className="">
                Inauguration Ceremony and release of problem statement. The
                rules for the Hackathon and the timeline will be briefly
                explained by the organisers.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-start mb-10 rounded-xl bg-white p-4 md:text-start"
            >
              <div className="text-lg font-black">February 17th</div>
              <time className="font-mono text-lg font-black">5:00 PM</time>
              <div className="">
                Hackathon Begins. The team can now start implementing their
                projects based on the released problem statements and prepare
                for presenting them to the Judges/Mentors.
              </div>
            </motion.div>
            <hr />
          </li>
          <li className="">
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-end mb-10 rounded-xl bg-white p-4"
            >
              <div className="text-lg font-black">February 17th</div>
              <time className="font-mono text-lg font-black">
                5:00 PM - 6:00 PM
              </time>
              <div className="">
                During this period, the teams must provide access to their
                project&apos;s Github repository to the organising committee.
                This allows the committee to monitor the team’s progress
                effectively.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-start mb-10 rounded-xl bg-white p-4 md:text-start"
            >
              <div className="text-lg font-black">February 17th</div>
              <time className="font-mono text-lg font-black">9:00 PM</time>
              <div className="">
                The mentors will review each team`&apos;s progress and will give
                valuable feedback and areas for improvement before the first
                judging round.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-end mb-10 rounded-xl bg-white p-4"
            >
              <div className="text-lg font-black">February 18th</div>
              <time className="font-mono text-lg font-black">8:00 AM</time>
              <div className="">
                The commencement of Judging Round 1 marks the stage where teams
                will showcase their projects to the panel. This interactive
                session allows teams to receive valuable feedback and potential
                suggestions for additional features. Please note that only a
                select few teams will advance to the subsequent judging round.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-start mb-10 rounded-xl bg-white p-4 md:text-start"
            >
              <div className="text-lg font-black">February 18th</div>
              <time className="font-mono text-lg font-black">2:00 PM</time>
              <div className="">
                Judging Round 2 begins. In this, the teams will present their
                project to the panel one last time and the winners will progress
                to the Phase 2, that is the Finals.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-end mb-10 rounded-xl bg-white p-4"
            >
              <div className="text-lg font-black">February 18th</div>
              <time className="font-mono text-lg font-black">4:30 PM</time>
              <div className="">
                Results of the Internal Hackathon will be announced. 3 Teams
                from the State will Represent their State in the Final Round of
                Bit n Build.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-start mb-10 min-w-full rounded-xl bg-white p-4 md:text-start"
            >
              <div className=" text-lg font-black">February 24th</div>
              {/* <time className="font-mono text-lg font-black">2:00 PM</time> */}
              <div className="">
                The Teams from all over the country will arrive at Bandra,
                Mumbai for the Finale of Bit n Build.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-end mb-10 rounded-xl bg-white p-4"
            >
              <div className="text-lg font-black">
                February 24th - February 25th
              </div>
              {/* <time className="font-mono text-lg font-black">4:30 PM</time> */}
              <div className="">
                The Teams Qualified through the State Level Internal Hackathons
                and the International Teams will compete in this 24 Hours Bit n
                Build.
              </div>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-white">
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
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="timeline-start mb-10 rounded-xl bg-white p-4 md:text-start"
            >
              <div className="text-lg font-black">February 25th</div>
              <div className="">
                The results of Bit n Build 2024 will be declared 24 hours
                following the conclusion of the event. The victorious teams will
                be conferred with the awards as detailed in the Prizes section.
              </div>
            </motion.div>
          </li>
        </ul>
      </section>
    </div>
  )
}
