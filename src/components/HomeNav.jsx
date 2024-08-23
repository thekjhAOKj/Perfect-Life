import React from 'react'
import { GiMonsteraLeaf } from 'react-icons/gi'
import profile from '../assets/profile_img.png' 
import brain from '../assets/brain.png'
import salad from '../assets/salad.png'
import dumb from '../assets/dumbbell.png'
import heart from '../assets/heart-beat.png'
import fire from '../assets/fire-flame-curved.png'
import { Link } from 'react-router-dom'

const HomeNav = () => {
  return (
    <div className='flex justify-between py-3 px-3 items-center'>
        <div className='flex gap-2 items-center text-[40px]'>
            <GiMonsteraLeaf className='text-green-700' />
            <Link to={'/'} className='font-semibold'>PERFECT LIFE</Link>
        </div>
        <div className='flex items-center gap-6'>
            <div className='flex items-center gap-4'>
                <h1 className='font-bold text-[23px]'>45</h1>
                <img src={fire} className='w-[40px]'/>
            </div>
            <img className='p-3 rounded-full w-[60px] bg-white border-black border-4' src={brain}/>
            <img src={profile} className='rounded-full w-[60px]'/>
        </div>
    </div>
  )
}

export default HomeNav