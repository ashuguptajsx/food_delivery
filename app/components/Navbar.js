'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-orange-500 p-4 shadow-lg animate-fade-in-down sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-wide hover:text-orange-200 transition-colors duration-300 transform hover:scale-105"
        >
          Foodie
        </Link>

        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className={`text-white px-3 py-2 rounded-md transition-all duration-300 ${
              pathname === '/'
                ? 'font-bold bg-orange-600 scale-105'
                : 'hover:bg-orange-600 hover:scale-105'
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`text-white px-3 py-2 rounded-md transition-all duration-300 ${
              pathname === '/menu'
                ? 'font-bold bg-orange-600 scale-105'
                : 'hover:bg-orange-600 hover:scale-105'
            }`}
          >
            Menu
          </Link>
          <Link
            href="/cart"
            className={`text-white px-3 py-2 rounded-md transition-all duration-300 ${
              pathname === '/cart'
                ? 'font-bold bg-orange-600 scale-105'
                : 'hover:bg-orange-600 hover:scale-105'
            }`}
          >
            Cart
          </Link>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 left-0 right-0 bg-orange-500 shadow-lg transition-all duration-300 ease-in-out transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className={`text-white px-4 py-2 w-full text-center rounded-md transition-all duration-300 ${
                pathname === '/'
                  ? 'font-bold bg-orange-600'
                  : 'hover:bg-orange-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={toggleMenu}
              className={`text-white px-4 py-2 w-full text-center rounded-md transition-all duration-300 ${
                pathname === '/menu'
                  ? 'font-bold bg-orange-600'
                  : 'hover:bg-orange-600'
              }`}
            >
              Menu
            </Link>
            <Link
              href="/cart"
              onClick={toggleMenu}
              className={`text-white px-4 py-2 w-full text-center rounded-md transition-all duration-300 ${
                pathname === '/cart'
                  ? 'font-bold bg-orange-600'
                  : 'hover:bg-orange-600'
              }`}
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}