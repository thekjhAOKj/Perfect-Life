import React from 'react'
import { IoMdWater } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";
import { RiBook2Line } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import rest from '../assets/OIP.jfif'
import ing from '../assets/rest.jpg'
import rec from '../assets/reco.jpg'
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";
import { PiForkKnifeFill } from "react-icons/pi";
import Calendar from './Calendar';



const TrackN = () => {

  return (
    <div className='w-full mt-10' >
      <div className='flex px-10 space-x-10'>
        <div className='w-[23%] h-[120px] btnsh bg-aesBlue border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <IoMdWater className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>water</h1>
          </div>
          <h1 className='font-bold text-white text-[40px]'>7 cups</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-aesRed border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <FaFire className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>calories</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>1200 cal</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-[#71b058] border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <PiForkKnifeFill className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>eat</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>3 meals</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-[#55679C] border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <TbMeat className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>protein</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>50 grams</h1>
        </div>
      </div>
      <div className='flex relative px-10 mt-5 gap-11'>
        <div className='border-4 border-black w-[74.2%] h-[60vh] rounded-xl'>
          <Calendar />
        </div>
        <div className='bg-white h-[60vh] w-[23%] rounded-xl flex flex-col gap-[1vh]'>
          <Link to={'/foodstore'}>
            <div className='w-full flex flex-col h-[30vh] bg-white border-4 border-black rounded-xl'>
              <img src={ing} className='h-[80%] object-cover rounded-md' alt="" />
              <h1 className='font-semibold text-[20px] text-center py-3'>Healthy Food Store</h1>
            </div>
          </Link>
          <Link to={'/foodstore'}>
            <div className='w-full flex flex-col h-[30vh] bg-white border-4 border-black rounded-xl'>
              <img src={rec} className='h-[80%] object-cover rounded-md' alt="" />
              <h1 className='font-semibold text-[20px] text-center py-3'>Healthy Recipes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TrackN