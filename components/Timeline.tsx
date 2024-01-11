import React from 'react'
import './Timeline.css'
import Image from 'next/image'

const Timeline = () => (
  <div className="bg-[url('/assets/lavaa.jpg')] bg-cover bg-bottom bg-no-repeat">
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
        <div
          className="border-2-2 absolute h-full border border-gray-700 border-opacity-20"
          style={{ left: '50%' }}
        ></div>
        {/* right timeline */}
        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
          </div>
          <div className="cards-right order-1 w-7/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">January 5th</h3>
            <p className="text-sm leading-snug tracking-wide text-white ">
              Registration for Internal State Hackathon.
            </p>
          </div>
        </div>
        {/* left timeline */}
        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
          </div>
          <div className="cards-right order-1 w-7/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">February 10th</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Hackathon Begins.
            </p>
          </div>
        </div>
        {/* right timeline */}
        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
            <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
          </div>
          <div className="cards-right order-1 w-7/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">February 10th</h3>
            <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
              Internal Hackathon Results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Timeline
