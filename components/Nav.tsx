import React from 'react'
import { Bungee } from 'next/font/google'

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-transparent  hover:bg-red-200 hover:bg-opacity-50 lg:shadow-none">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#home" className={bungee.className + ' p-2 text-xl'}>
            BitnBuild
          </a>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className={
                  bungee.className + ' hover:text-brown-600 p-2 text-yellow-600'
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className={
                  bungee.className + ' hover:text-brown-600 p-2 text-yellow-600'
                }
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#designers"
                className={
                  bungee.className + ' hover:text-brown-600 p-2 text-yellow-600'
                }
              >
                Designers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={
                  bungee.className + ' hover:text-brown-600 p-2 text-yellow-600'
                }
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
