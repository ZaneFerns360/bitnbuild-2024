"use client"

import React, { useEffect } from 'react';

import { Bungee } from 'next/font/google'
import Image from 'next/image';

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const NavBar = () => {
  useEffect(() => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const heroContent = document.getElementById('hero-content');

    const handleHamburgerClick = () => {
      if (navLinks) {
        navLinks.classList.toggle('hidden');
        // Toggle the class for icon flip
        if (hamburgerBtn) {
          hamburgerBtn.classList.toggle('flipped');
        }
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxValue = scrollY * 0.4; // Adjust the parallax speed as needed

      // Apply parallax effect to the background image
      const backgroundImage = document.querySelector(
        '#home .absolute.inset-0 img'
      );
      if (backgroundImage) {
        backgroundImage.style.transform = `translate3d(0, ${parallaxValue}px, 0)`;
      }

      // Apply other effects as needed for the hero content
      if (scrollY > 0 && heroContent) {
        heroContent.classList.add('scrolled');
      } else if (heroContent) {
        heroContent.classList.remove('scrolled');
      }
    };

    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', handleHamburgerClick);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (hamburgerBtn) {
        hamburgerBtn.removeEventListener('click', handleHamburgerClick);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="z-100 sticky top-0 bg-transparent hover:bg-gradient-to-t from-black to-transparent to shadow-md lg:shadow-none">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Hamburger for Small Screens */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Image src="/../public/assets/mc.png" alt="BitNBuild" className="h-8 w-52" width={100} height={100} />
            {/* Hamburger Menu Button */}
            <button id="hamburger-btn" className="lg:hidden focus:outline-none">
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
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mt-4 lg:mt-0 hidden lg:flex" id="nav-links">
            <li>
              <a href="#home" className="text-yellow-600 hover:text-brown-600 brand-font hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#shop" className="text-yellow-600 hover:text-brown-600 brand-font hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#designers" className="text-yellow-600 hover:text-brown-600 brand-font hover:underline">
                Designers
              </a>
            </li>
            <li>
              <a href="#contact" className="text-yellow-600 hover:text-brown-600 brand-font hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
