import React from 'react'
import HomeNav from '../components/HomeNav'
import SideBarM from '../components/SideBarM'
import TrackM from '../components/TrackM'

const Mental = () => {
  return (
    <div>
        <HomeNav />
        <div className='flex'>
          <SideBarM />
          <TrackM />
        </div>
    </div>
  )
}

export default Mental