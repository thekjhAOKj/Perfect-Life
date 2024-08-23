import React from 'react'
import HomeNav from '../components/HomeNav'
import SideBarN from '../components/SideBarN'
import TrackN from '../components/TrackN'

const Nutrition = () => {
  return (
    <div>
        <HomeNav />
        <div className='flex'>
          <SideBarN />
          <TrackN />
        </div>
    </div>
  )
}

export default Nutrition