import React from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Team from '../components/Team'

const Landing = () => {
  return (
    <div className='h-[350vh]'>
        <Nav />
        <Hero />
        <About />
        <Services />
        <Team />
    </div>
  )
}

export default Landing