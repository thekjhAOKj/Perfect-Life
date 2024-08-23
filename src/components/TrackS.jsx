import React from 'react'
import { IoMdWater } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";
import { RiBook2Line } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import { GiGymBag } from "react-icons/gi";
import { FaBasketballBall } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import wear from '../assets/wear.jpg'
import { Link } from 'react-router-dom';
import { TbMeat } from "react-icons/tb";
import Calendar from './Calendar';


const TrackS = () => {

  const events = [
    {
      name: 'gym',
      time: '7 AM',
      isClose: false
    },
    {
      name: 'lunch',
      time: '3 PM',
      isClose: false
    },
    {
      name: 'therapist class',
      time: '5 PM',
      isClose: false
    },
  ]
  const tasks = [
    {
      name: 'walk the dog',
      isDone: false
    },
    {
      name: 'study',
      isDone: false
    },
    {
      name: 'shower',
      isDone: false
    }
  ]

  return (
    <div className='w-full mt-10' >
      <div className='flex px-10 space-x-10'>
        <div className='w-[23%] h-[120px] btnsh bg-aesBlue border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <GiGymBag className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>workout</h1>
          </div>
          <h1 className='font-bold text-white text-[40px]'>1 hour</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-aesRed border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <FaPersonRunning className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>run</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>5 km</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-[#ffab24] border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <FaBasketballBall className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>basket</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>2 hours</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-[#55679C] border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <FaFire className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>burn</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>1000 cal</h1>
        </div>
      </div>
      <div className='flex relative px-10 mt-5 gap-11'>
        <div className='border-4 border-black w-[74.2%] h-[60vh] rounded-xl'>
          <Calendar />
        </div>
        <div className='bg-white h-[60vh] w-[23%] rounded-xl flex flex-col gap-[3vh]'>
          <div className='w-full h-[30vh] bg-white border-4 border-black rounded-xl'>
            <h1 className='p-3 text-[20px] font-bold'>Upcoming Events</h1>
            <div className='flex flex-col gap-3 p-2'>
              {events.map(event => (
                <div className='p-3 flex  justify-between font-semibold border-4 rounded-md border-black'>
                  <h1>{event.name}</h1>
                  <h1>{event.time}</h1>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-[30vh] bg-white border-4 border-black rounded-xl'>
            <Link to={'/sportstore'} className='w-full flex flex-col h-[30vh] bg-white border-4 border-black rounded-xl'>
              <img src={wear} className='h-[80%] object-cover rounded-md' alt="" />
              <h1 className='font-semibold text-[20px] text-center py-3'>equipments store</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackS