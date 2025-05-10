// app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { RiMenu3Line } from 'react-icons/ri'
import { RxCross1 } from 'react-icons/rx'
import { FiUser, FiSearch } from 'react-icons/fi'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="bg-gradient-to-b from-green-900 to-white text-black px-28 py-6 flex items-center justify-between relative z-10 shadow-lg">
      <h1 className="text-2xl font-bold flex items-center mr-10 gap-1">
        <span className="text-green-500">Al</span>
        <img src="/assets/navmosque.png" alt="Icon" className="w-10 h-6" />
        Quran
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-bold">
        <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-yellow-500 transition">About</Link></li>
        <li><Link href="/courses" className="hover:text-yellow-500 transition">Courses</Link></li>
        <li><Link href="/blog" className="hover:text-yellow-500 transition">Blog</Link></li>
        <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4 md:gap-6">
        <FiSearch className="text-2xl cursor-pointer hover:text-yellow-500 hover:scale-110 transition duration-200" />
        <FiUser className="text-2xl cursor-pointer hover:text-yellow-500 hover:scale-110 transition duration-200" />
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <RxCross1 className="hover:text-yellow-500 transition" />
          ) : (
            <RiMenu3Line className="hover:text-yellow-500 transition" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gradient-to-b from-green-900 via-white to-green-700 flex flex-col gap-4 p-6 md:hidden z-50 shadow-lg">
          <li><Link href="/" onClick={toggleMenu} className="hover:bg-yellow-500 px-3 py-1 rounded transition">Home</Link></li>
          <li><Link href="/about" onClick={toggleMenu} className="hover:bg-yellow-500 px-3 py-1 rounded transition">About</Link></li>
          <li><Link href="/courses" onClick={toggleMenu} className="hover:bg-yellow-500 px-3 py-1 rounded transition">Courses</Link></li>
          <li><Link href="/blog" onClick={toggleMenu} className="hover:bg-yellow-500 px-3 py-1 rounded transition">Blog</Link></li>
          <li><Link href="/contact" onClick={toggleMenu} className="hover:bg-yellow-500 px-3 py-1 rounded transition">Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}
