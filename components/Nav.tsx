import React from 'react'

const NavBar = () => {
  return (
    <header className="z-100 sticky top-0 bg-transparent shadow-md hover:bg-white lg:shadow-none">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col items-center justify-between lg:flex-row">
          <ul className="mt-4 flex flex-col space-y-4 lg:mt-0 lg:flex lg:flex-row lg:space-x-6 lg:space-y-0">
            <li>
              <a
                href="#home"
                className="hover:text-brown-600 brand-font text-yellow-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#shop"
                className="hover:text-brown-600 brand-font text-yellow-600"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#designers"
                className="hover:text-brown-600 brand-font text-yellow-600"
              >
                Designers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-brown-600 brand-font text-yellow-600"
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
