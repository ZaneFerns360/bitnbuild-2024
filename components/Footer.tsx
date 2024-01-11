import React from 'react'
import { Bungee } from 'next/font/google'
import Link from 'next/link'

// Define the Bungee font
const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Footer = () => {
  return (
    <div
      className="min-h-96 w-full bg-[url('/assets/resize.webp')] bg-cover bg-no-repeat pt-12"
      id="footer"
    >
      <footer className="mx-auto w-full  px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
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

          <div className="mt-3 space-x-2">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center text-white transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
              href="https://gdsc.community.dev/fr-conceicao-rodrigues-college-of-engineering-mumbai/
              "
            >
              <svg
                className="h-6 w-6 flex-shrink-0" // Increase the height and width here
                xmlns="http://www.w3.org/2000/svg"
                width="24" // Increase the width here
                height="24" // Increase the height here
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center text-white transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
              href="https://www.twitter.com/gdsc_crce
              "
            >
              <svg
                className="h-6 w-6 flex-shrink-0" // Increase the height and width here
                xmlns="http://www.w3.org/2000/svg"
                width="24" // Increase the width here
                height="24" // Increase the height here
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center text-white transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
              href="https://github.com/CRCE-GDSC
              "
            >
              <svg
                className="h-6 w-6 flex-shrink-0" // Increase the height and width here
                xmlns="http://www.w3.org/2000/svg"
                width="24" // Increase the width here
                height="24" // Increase the height here
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-center font-bold text-white transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
              href="https://www.instagram.com/https://www.instagram.com/gdsc_crce/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
                fontWeight={300}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.436.336 3.018 1.675.627 1.43.67 2.605.67 4.192v8.17c0 1.586-.043 2.762-.67 4.192-.582 1.34-1.652 1.613-3.018 1.675-1.267.058-1.646.07-4.85.07s-3.582-.012-4.85-.07c-1.366-.062-2.436-.335-3.018-1.675-.627-1.43-.67-2.606-.67-4.192v-8.17c0-1.587.043-2.763.67-4.192.582-1.34 1.652-1.613 3.018-1.675 1.268-.058 1.647-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.683.077-2.882.38-3.897 1.395-1.016 1.016-1.318 2.214-1.395 3.897-.058 1.28-.072 1.689-.072 4.947s.014 3.668.072 4.947c.077 1.683.38 2.881 1.395 3.897 1.015 1.016 2.214 1.318 3.897 1.395 1.28.058 1.689.072 4.947.072s3.668-.014 4.947-.072c1.683-.077 2.882-.38 3.897-1.395 1.016-1.016 1.318-2.214 1.395-3.897.058-1.279.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.077-1.683-.38-2.881-1.395-3.897-1.015-1.015-2.214-1.318-3.897-1.395-1.28-.058-1.688-.072-4.947-.072z" />
                <path d="M12 7.384c-2.549 0-4.616 2.067-4.616 4.616s2.067 4.616 4.616 4.616 4.616-2.067 4.616-4.616-2.067-4.616-4.616-4.616zm0 7.616c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3z" />
                <circle cx="18.384" cy="5.617" r="1.231" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
