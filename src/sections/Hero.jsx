import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import { Typewriter } from 'react-simple-typewriter'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  useGSAP(() => {
    gsap.fromTo('.hero-text h1, .hero-text h2, .hero-text span',
      {
        y: -50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 3,
        ease: 'power2.inOut'
      }
    )
    gsap.fromTo('.hero-button a, .hero-p',
      {
        y: -200,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 3,
        ease: 'power4.Out'
      }
    )
  }, [])

  useEffect(() => {
    if (vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff00cc,
        backgroundColor: 0x10101,
        maxDistance: 15.00
      })

      // Delay loader hiding slightly to allow smoother visual experience
      setTimeout(() => {
        gsap.to(vantaRef.current, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => setIsLoading(false)
        })
      }, 1000)
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])
return (
    <section id="hero" ref={vantaRef} className="relative w-full min-h-screen overflow-hidden flex items-center justify-center opacity-0 transition-opacity duration-1000">
        <div className="hero-text relative z-10 text-center text-white px-5">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Portfolio</h1>
            <h2 className="text-xl md:text-2xl font-medium"> I’m a{' '}
                <span className="text-2xl font-extrabold  text-pink-600">
                    <Typewriter words={[
                        'Mark Joseph O. Iglesia',
                        'BSIT Graduate - Web Systems Technology',
                        'Full-Stack Web Developer',
                        'Problem Solver',
                        'Backend Developer',
                        'Frontend Developer',
                        'Clean Code Advocate',
                        'Lifelong Learner',
                        'Tech Explorer',
                        'Leader',
                        'Content Creator',
                        'Critical Thinker',
                        'Team Collaborator',
                        'Driven by Passion'
                        ]}
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={30}
                        delaySpeed={1000}
                    />
                </span>
            </h2>
            <div className="hero-button mt-6 flex justify-center gap-4">
                <a href="#projects" className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-lg transition"> View Projects</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">Download Resume</a>
            </div>
            <p className="hero-p text-base md:text-lg mt-4 max-w-2xl mx-auto text-gray-100"> I’m passionate about building clean, user-friendly web apps and bringing ideas to life through code.</p>
        </div>
    <a href="#about" title="Learn more" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 3.646a.5.5 0 0 1 .708 0L8 9.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        <path fillRule="evenodd" d="M1.646 7.646a.5.5 0 0 1 .708 0L8 13.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
    </a>
</section>
)}

export default Hero
