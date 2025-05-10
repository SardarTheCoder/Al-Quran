'use client'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Sharpened Background Image */}
      <Image
        src="/assets/aboutbk.jpg"
        alt="About Background"
        fill
        priority
               quality={100}
        className="object-fit object-center filter  contrast-105 "
   />
         
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
   

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full gap-6 text-center">
        <h3 className="text-white text-xl capitalize">Largest Online Maddrasah</h3>
        <h1 className="text-white text-3xl font-bold capitalize">Islamic Online Maddrasah</h1>
        <h3 className="text-white text-xl capitalize">
          Islamic Online Maddrasah is an ISO certified <br />
          Educational Institute
        </h3>
      </div>
    </div>
  )
}

export default About
