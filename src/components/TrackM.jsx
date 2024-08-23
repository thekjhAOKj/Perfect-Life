import React from 'react'
import { IoMdWater } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";
import { RiBook2Line } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import { GiMeditation } from "react-icons/gi";
import { IoIosJournal } from "react-icons/io";
import { Link } from 'react-router-dom';
import cont from '../assets/cont.jpg'
import Calendar from './Calendar';


const TrackM = () => {

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
            <GiMeditation className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>meditate</h1>
          </div>
          <h1 className='font-bold text-white text-[40px]'>30 mins</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-aesRed border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <IoIosJournal className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>journal</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>20 mins</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-[#e7c68f] border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <RiBook2Line className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>read</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>10 pages</h1>
        </div>
        <div className='w-[23%] h-[120px] btnsh bg-[#55679C] border-4 border-black rounded-md flex items-center justify-between px-5'>
          <div className='flex flex-col justify-center items-center'>
            <IoMoon className='text-white text-[50px]' />
            <h1 className='text-white font-semibold text-[25px]'>sleep</h1>
          </div>

          <h1 className='font-bold text-white text-[40px]'>8 hours</h1>
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
            <div className='w-full h-[30vh] bg-white border-4 border-black rounded-xl'>
              <h1 className='p-3 text-[20px] font-bold'>Tasks</h1>
              <div className='flex flex-col gap-3 p-2'>
                {tasks.map(task => (
                  <div className='p-3 flex  justify-between font-semibold border-4 rounded-md border-black'>
                    <h1>{task.name}</h1>
                    <input className=' w-[30px]' type="checkbox" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackM