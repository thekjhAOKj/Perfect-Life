import React from 'react'
import { MdOutlineDoubleArrow } from "react-icons/md";
import { LuSalad } from "react-icons/lu";
import { LuDumbbell } from "react-icons/lu";
import brain from '../assets/brain.png'
import salad from '../assets/salad.png'
import dumb from '../assets/dumbbell.png'
import heart from '../assets/heart-beat.png'
import { useTypewriter } from 'react-simple-typewriter';
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {

  return (
    <div className='flex justify-between px-32 mt-28'>
        <div>
            <h1 className='font-bold text-[90px] leading-[100px]'>BE <span className='text-main'><TypeAnimation
              sequence={['NUTRITIOUS' , 3000 , 'MINDFUL' , 3000 , 'FIT' , 3000 , 'HEALTHY' , 3000 , 'PERFECT' , 3000]}
              repeat={Infinity}
             /></span> <br /> With Us .</h1>
            <p className='text-[30px] w-[800px] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
            <div className='flex gap-3 items-center mt-10'>
                <div className='bg-main text-[30px] text-white px-5 py-3 font-semibold rounded-md drop-shadow-md btnsh'>GET STARTED</div>
                <div className='bg-main text-[30px] text-white px-4 py-4 font-semibold drop-shadow-md btnsh rounded-full'><MdOutlineDoubleArrow /></div>
            </div>
        </div>
        <div className='flex gap-3'>
          <div className='flex flex-col gap-3'>
            <div className='bg-aesBlue w-[240px] h-[240px] rounded-xl flex justify-center items-center'><img className='p-3 rounded-full w-[100px] bg-white' src={brain}/></div>
            <div className='bg-aesYell w-[240px] h-[240px] rounded-xl flex justify-center items-center'><img className='p-3 rounded-full w-[100px] bg-white' src={heart}/></div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='bg-aesRed w-[240px] h-[240px] rounded-xl flex justify-center items-center'><img className='p-3 rounded-full w-[100px] bg-white' src={dumb}/></div>
            <div className='bg-aesPur w-[240px] h-[240px] rounded-xl flex justify-center items-center'><img className='p-3 rounded-full w-[100px] bg-white' src={salad}/></div>
          </div>
        </div>
    </div>
  )
}

export default Hero