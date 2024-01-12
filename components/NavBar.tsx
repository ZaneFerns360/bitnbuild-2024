'use client'

import React, { useState } from 'react'
import { Bungee } from 'next/font/google'
import Image from 'next/image'
import Logo from '@public/assets/mc.png'
import '@components/Navbar.css'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const NavBar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible)
  }

  return (
    <header className="bg-image sticky top-0 z-50 shadow-md lg:shadow-none">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col items-center justify-between lg:flex-row">
          {/* Logo and Hamburger for Small Screens */}
          <div className="flex w-full items-center justify-between lg:w-auto ">
            <div className="max-md:hidden">
              {' '}
              <Image
                src={Logo}
                alt="BitNBuild"
                className="h-8 w-52"
                width={100}
                height={100}
              />
            </div>

            {/* Hamburger Menu Button */}
            <button
              id="hamburger"
              className={`focus:outline-none lg:hidden ${
                isNavVisible ? 'flipped' : ''
              }`}
              onClick={handleHamburgerClick}
            >
              <svg
                className="h-6 w-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`mt-4 flex flex-col space-y-4 text-center lg:mt-0 lg:flex lg:flex-row lg:space-x-6 lg:space-y-0 ${
              isNavVisible ? 'm-0 w-full bg-white p-0' : 'hidden'
            }`}
            id="nav-links"
          >
            <li>
              <a
                href="#home"
                className="brand-font font-bold text-green-700 hover:text-green-800 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="brand-font font-bold text-green-700 hover:text-green-800 hover:underline"
              >
                About{' '}
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="brand-font font-bold text-green-700 hover:text-green-800 hover:underline"
              >
                Contact Us{' '}
              </a>
            </li>
            <li>
              <a
                href="#FAQ"
                className="brand-font font-bold text-green-700 hover:text-green-800 hover:underline"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
