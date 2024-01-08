'use client'

import React, { useEffect } from 'react'

import { Bungee } from 'next/font/google'
import Image from 'next/image'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const NavBar = () => {
  useEffect(() => {
    const hamburgerBtn = document.getElementById('hamburger-btn')
    const navLinks = document.getElementById('nav-links')
    const heroContent = document.getElementById('hero-content')

    const handleHamburgerClick = () => {
      if (navLinks) {
        navLinks.classList.toggle('hidden')
        // Toggle the class for icon flip
        if (hamburgerBtn) {
          hamburgerBtn.classList.toggle('flipped')
        }
      }
    }

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', handleHamburgerClick)
    }

    return () => {
      if (hamburgerBtn) {
        hamburgerBtn.removeEventListener('click', handleHamburgerClick)
      }
    }
  }, [])

  return (
    <header className="z-100 to sticky top-0 bg-transparent shadow-md hover:bg-gradient-to-t lg:shadow-none">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col items-center justify-between lg:flex-row">
          {/* Logo and Hamburger for Small Screens */}
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Image
              src="/assets/mc.png"
              alt="BitNBuild"
              className="h-8 w-52"
              width={100}
              height={100}
            />
            {/* Hamburger Menu Button */}
            <button id="hamburger-btn" className="focus:outline-none lg:hidden">
              <svg
                className="h-6 w-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className="mt-4 flex hidden flex-col space-y-4 lg:mt-0 lg:flex lg:flex-row lg:space-x-6 lg:space-y-0"
            id="nav-links"
          >
            <li>
              <a
                href="#home"
                className="hover:text-brown-600 brand-font text-yellow-600 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="hover:text-brown-600 brand-font text-yellow-600 hover:underline"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#designers"
                className="hover:text-brown-600 brand-font text-yellow-600 hover:underline"
              >
                Designers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-brown-600 brand-font text-yellow-600 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
