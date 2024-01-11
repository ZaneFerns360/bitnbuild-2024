import React from 'react'
import './Timeline.css'

const Timeline2 = () => (
  <div className="flex h-full items-center justify-center bg-gray-800 bg-[url('/assets/ob.gif')] bg-contain bg-repeat">
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
        <div className="cards-right order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
          <h3 className="mb-3 text-xl font-bold text-white">February 23rd</h3>
          <p className="text-sm leading-snug tracking-wide text-white ">
            Teams Arrive.
          </p>
        </div>
      </div>
      {/* left timeline */}
      <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
          <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
        </div>
        <div className="cards-left order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl">
          <h3 className="mb-3 text-xl font-bold text-white">
            February 23rd - February 24th
          </h3>
          <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
            Grand Finale at Fr. Conceicao Rodrigues College of Engineering.
          </p>
        </div>
      </div>
      {/* right timeline */}
      <div className="right-timeline mb-8 flex w-full items-center justify-between">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
          <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
        </div>
        <div className="cards-right order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
          <h3 className="mb-3 text-xl font-bold text-white">February 24th</h3>
          <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
            Final Results of BitNBuild Hackathon.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Timeline2
