import React from 'react'
import HomeNav from '../components/HomeNav'
import SideBarS from '../components/SideBarS'
import TrackS from '../components/TrackS'

const Sports = () => {
  return (
    <div>
        <HomeNav />
        <div className='flex'>
          <SideBarS />
          <TrackS />
        </div>
    </div>
  )
}

export default Sports