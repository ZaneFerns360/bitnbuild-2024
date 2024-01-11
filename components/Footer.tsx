import React from 'react'
import { Bungee } from 'next/font/google'
import { FaInstagram, FaGithub, FaTwitter, FaGoogle } from 'react-icons/fa'

// Define the Bungee font
const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Footer = () => {
  return (
    <div
      className="flex min-h-96 w-full flex-col items-center justify-between bg-[url('/assets/resize.webp')] bg-cover bg-no-repeat pt-12 md:flex-row"
      id="footer"
    >
      <footer className="mx-auto flex w-full flex-col items-center justify-between px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="mb-8 text-left md:mb-0">
          <div>
            <a
              className={
                bungee.className +
                ' flex-none text-4xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 '
              }
              href="#"
              aria-label="Brand"
            >
              BitNBuild
            </a>
          </div>

          <div className="mt-3 text-2xl md:text-3xl">
            <p className={bungee.className + ' text-white'}>
              The Collaborative Hackathon{' '}
              <a
                className={
                  bungee.className +
                  ' font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400'
                }
                href="#"
              >
                -GDSC
              </a>{' '}
              family.
            </p>
            <p className={bungee.className + ' text-white'}>
              © GDSC Fr.Crce. 2024. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mr-12 mt-3 space-x-2 text-right">
          <h2 className={bungee.className + ' mb-2 text-2xl text-white'}>
            Contact Us
          </h2>
          <a href="https://www.instagram.com/gdsc_crce/">
            <FaInstagram className="inline-block text-4xl" />
          </a>
          <a href="https://github.com/CRCE-GDSC">
            <FaGithub className="inline-block text-4xl" />
          </a>
          <a href="https://www.twitter.com/gdsc_crce">
            <FaTwitter className="inline-block text-4xl" />
          </a>
          <a href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/">
            <FaGoogle className="inline-block text-4xl" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
