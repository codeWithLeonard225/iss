"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* BRAND: Logo + School Name */}
        <Link href="/" className="flex items-center space-x-3 min-w-0">
          
          {/* LOGO */}
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
            <Image
              src="/images/international-logo.jpg"
              alt="The International School Ltd Secondary Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 32px, 40px"
            />
          </div>

          {/* SCHOOL NAME */}
          <span className="font-bold text-blue-700 leading-tight truncate">
            <span className="hidden md:block text-2xl">
              The International School Ltd Secondary
            </span>
            <span className="block md:hidden text-lg">
              TIS Secondary
            </span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
          <Link href="/service" className="hover:text-blue-600">Academics</Link>
          <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>

          {/* LOGIN BUTTON */}
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Student Portal
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMounted && open && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-3 text-lg overflow-x-hidden">
          <Link href="/" className="block" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="block" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/service" className="block" onClick={() => setOpen(false)}>Academics</Link>
          <Link href="/gallery" className="block" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/contact" className="block" onClick={() => setOpen(false)}>Contact</Link>

          <Link
            href="/login"
            className="block w-full text-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition mt-4"
            onClick={() => setOpen(false)}
          >
            Student Portal
          </Link>
        </div>
      )}
    </nav>
  );
}
