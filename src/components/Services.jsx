import React, { useState } from 'react'
import nature from '../assets/nature.jpg'
import brain from '../assets/brain.png'
import salad from '../assets/salad.png'
import dumb from '../assets/dumbbell.png'
import gym from '../assets/gym.mp4'
import roll from '../assets/roll.mp4'
import reading from '../assets/reading.mp4'

const Services = () => {
  const [menu , setMenu] = useState(1)
  const [vid , setVid] = useState(1)
  return (
  <div className='mt-[300px]'>
    <h1 className='text-center text-[60px] font-bold'>SERVICES</h1>
    <div className='flex gap-10 px-32 py-5'>
        <div className='w-[90%] relative mx-auto h-[800px] rounded-xlw'>
            <div><video autoPlay loop muted className='serhov' src={vid === 1? roll : vid === 2? gym : reading} alt="" /></div>
            {menu === 1 ? <div className='absolute h-[792px] rounded-md w-[30%] top-0 bg-aesYell flex flex-col items-center pt-10'>
              <img className='p-3 rounded-full w-[120px] bg-white' src={salad}/>
              <h1 className='text-white font-semibold text-[30px]'>NUTRITION</h1>
              <div className='flex flex-col mt-10 w-full px-6 gap-3 font-bold'>
                <div className='bg-white py-7 rounded-lg p-3'>healthy ingredients</div>
                <div className='bg-white py-7 rounded-lg p-3'>healthy food store</div>
                <div className='bg-white py-7 rounded-lg p-3'>nutrition facts</div>
              </div>
            </div> : menu === 2 ?
            <div className='absolute h-[792px] rounded-md w-[30%] top-0 bg-aesRed flex flex-col items-center pt-10'>
              <img className='p-3 rounded-full w-[120px] bg-white' src={dumb}/>
              <h1 className='text-white font-semibold text-[30px]'>SPORTS</h1>
              <div className='flex flex-col mt-10 w-full px-6 gap-3 font-bold'>
                <div className='bg-white py-7 rounded-lg p-3'>workout tracker</div>
                <div className='bg-white py-7 rounded-lg p-3'>wearables store</div>
                <div className='bg-white py-7 rounded-lg p-3'>injuries awarness</div>
              </div>
            </div> :
            <div className='absolute h-[792px] rounded-md w-[30%] top-0 bg-aesPur flex flex-col items-center pt-10'>
              <img className='p-3 rounded-full w-[120px] bg-white' src={brain}/>
              <h1 className='text-white font-semibold text-[30px]'>MENTAL HEALTH</h1>
              <div className='flex flex-col mt-10 w-full px-6 gap-3 font-bold'>
                <div className='bg-white py-7 rounded-lg p-3'>contact a therapist</div>
                <div className='bg-white py-7 rounded-lg p-3'>community to talk with</div>
                <div className='bg-white py-7 rounded-lg p-3'>journal</div>
              </div>
            </div>}
        </div>
        <div className='flex justify-center flex-col gap-10 mx-auto'>
          <div onClick={() => {setVid(3)
            setMenu(3)
          }} className='bg-aesPur cursor-pointer text-[40px] text-white w-[400px] py-10 font-semibold rounded-md drop-shadow-md flex flex-col justify-center items-center'><img className='p-3 rounded-full w-[100px] bg-white' src={brain}/> MENTAL HEALTH</div>
          <div onClick={() => {setVid(1)
            setMenu(1)
          }} className='bg-aesYell text-[40px] cursor-pointer text-white w-[400px] py-10 font-semibold  rounded-md drop-shadow-md flex flex-col justify-center items-center'><img className='p-3 rounded-full w-[100px] bg-white' src={salad}/> NUTRITION</div>
          <div onClick={() => {setVid(2)
            setMenu(2)
          }} className='bg-aesRed text-[40px] cursor-pointer text-white w-[400px] py-10 font-semibold  rounded-md drop-shadow-md flex flex-col justify-center items-center'><img className='p-3 rounded-full w-[100px] bg-white' src={dumb}/> SPORTS</div>
        </div>
    </div>
    </div>
  )
}

export default Services