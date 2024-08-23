import React from 'react'
import HomeNav from '../components/HomeNav'
import SideBar from '../components/SideBar'
import Track from '../components/Track'

const Home = () => {
  return (
    <div>
        <HomeNav />
        <div className='flex'>
          <SideBar />
          <Track />
        </div>
    </div>
  )
}

export default Home