import React, { useEffect, useRef } from 'react'
import AboutExperience from '../components/AboutModels/Aboutexperience.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { words } from '../constants/index.js'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef()

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate the word-by-word text
      const wordAnim = gsap.fromTo('.about-text h1 span span',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.5, ease: 'power3.out', paused: true }
      )

      ScrollTrigger.create({
        trigger: '.about-text',
        start: 'top 80%',
        onEnter: () => wordAnim.play(),
        onLeave: () => wordAnim.reverse(),
        onEnterBack: () => wordAnim.play(),
        onLeaveBack: () => wordAnim.reverse(),
      })

      // Animate second and third heading
      const headingsAnim = gsap.fromTo(
        '.about-text h1:nth-of-type(2), .about-text h1:nth-of-type(3)',
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out', paused: true }
      )

      ScrollTrigger.create({
        trigger: '.about-text',
        start: 'top 80%',
        onEnter: () => headingsAnim.play(),
        onLeave: () => headingsAnim.reverse(),
        onEnterBack: () => headingsAnim.play(),
        onLeaveBack: () => headingsAnim.reverse(),
      })

      // Animate AboutExperience
      const experienceAnim = gsap.fromTo('.About-Experience',
        { opacity: 0, scale: 0.9, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out', paused: true }
      )

      ScrollTrigger.create({
        trigger: '.About-Experience',
        start: 'top 85%',
        onEnter: () => experienceAnim.play(),
        onLeave: () => experienceAnim.reverse(),
        onEnterBack: () => experienceAnim.play(),
        onLeaveBack: () => experienceAnim.reverse(),
      })

      // Animate paragraph
      const paragraphAnim = gsap.fromTo('.about-p',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out', paused: true }
      )

      ScrollTrigger.create({
        trigger: '.about-p',
        start: 'top 90%',
        onEnter: () => paragraphAnim.play(),
        onLeave: () => paragraphAnim.reverse(),
        onEnterBack: () => paragraphAnim.play(),
        onLeaveBack: () => paragraphAnim.reverse(),
      })

    }, aboutRef)

    return () => ctx.revert()
  }, [])

return (
    <section id="about" ref={aboutRef} className="bg-[#1f1f1f] relative w-full min-h-[80vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden flex items-center justify-center py-5 px-10 md:px-20">
        <div className="flex flex-col md:w-full w-screen md:px-15  mt-0">
            <div className="flex flex-col">
                <div className="about-text m-5">
                    <h1>Shaping
                        <span className="slide">
                            <span className="wrapper">
                            {words.map((word) => (
                                <span >{word.text}</span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into Scalable Solutions</h1>
                    <h1>that Drive Real Impact</h1>
                </div>
            </div>       
        <figure>
            <div className="About-Experience">
                <AboutExperience />
            </div>
            <p className="about-p text-center text-sm md:text-base lg:text-lg text-white mt-2 max-w-3xl">
                From identifying challenges to crafting solutions, I believe every problem is an opportunity to innovate, inspire, and build something meaningful.
            </p>
        </figure>
    </div>
</section>    
)}
export default About