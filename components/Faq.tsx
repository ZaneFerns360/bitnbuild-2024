import React from 'react'
import Image from 'next/image'
import { Bungee } from 'next/font/google'
import FAQImg from '@public/assets/FAQ.png'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const Faq = () => {
  return (
    <>
      <section
        className="bg-conic-gradient py-5 text-gray-900"
        style={{
          backgroundImage:
            'conic-gradient(#8F8F8F 90deg, #7F7F7F 90deg 180deg, #8F8F8F 180deg 270deg, #7F7F7F 270deg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '60px 60px',
          backgroundPosition: 'top left',
        }}
      >
        <div className="mx-auto max-w-sm py-4 text-center">
          <Image
            className="mx-auto text-center"
            src={FAQImg}
            width={150}
            height={150}
            alt="about-us"
          />
        </div>

        <div className="container mx-auto px-5 py-2 md:py-10">
          <div className="my-10 text-center">
            <h1 className="title-font mb-4 text-center text-2xl font-semibold text-white sm:text-3xl">
              Some common questions were often asked
            </h1>
            <p className="mx-auto text-base leading-relaxed text-white lg:w-3/4 xl:w-2/4">
              The most common questions about how our hackathon will be
              conducted
            </p>
          </div>
          <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="rounded-md  bg-gray-200 px-4 py-2 font-semibold">
                  How Long is this site live?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 px-4 py-2 font-semibold">
                  Can I install/upload anything I want on there?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="rounded-md  bg-gray-200 px-4 py-2 font-semibold">
                  How can I migrate to another site?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="rounded-md  bg-gray-200 px-4 py-2 font-semibold">
                  Can I change the domain you give me?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="rounded-md  bg-gray-200 px-4 py-2 font-semibold">
                  How many sites I can create at once?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="rounded-md  bg-gray-200 px-4 py-2 font-semibold">
                  How can I communicate with you?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
