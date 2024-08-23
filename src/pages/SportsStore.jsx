import React from 'react'
import SportsHero from '../components/SportsHero.jsx'
import SportsProducts from '../components/SportsProducts.jsx'
import HomeNav from '../components/HomeNav.jsx'

const SportsStore = () => {
  return (
    <div>
      <HomeNav />
      <SportsHero />
      <SportsProducts />
    </div>
  )
}

export default SportsStore