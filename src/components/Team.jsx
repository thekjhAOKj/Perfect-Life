import React from 'react'
import cole from '../assets/cole.jpg'
import { FaCode } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import you from '../assets/you.jpg'
import sal from '../assets/sal.jpg'
import far from '../assets/far.jpg'
import moh from '../assets/moh.jpg'
import me from '../assets/me.jpg'

const Team = () => {
  return (
    <div>
        <h1 className='text-[60px] text-center font-bold mb-20 mt-32'>TEAM</h1>
        <div className='flex justify-around '>
            <div className='h-[45vh] w-[350px] border-4 border-black rounded-xl flex flex-col items-center justify-between'>
                <div className='p-10'>
                    <img src={me} className='w-[150px] h-[150px] rounded-full object-cover' alt="" />
                    <h1 className='text-center text-[30px] font-semibold p-3'>SALAH</h1>
                </div>
                <div className='w-full flex justify-center gap-5 items-center p-10 bg-[#6482AD] rounded-b-xl'>
                    <FaCode className='text-[50px] p-2 bg-white rounded-full' />
                    <h1 className='text-[30px] font-semibold text-white'>dev</h1>
                </div>
            </div>
            <div className='h-[45vh] w-[350px] border-4 border-black rounded-xl flex flex-col items-center justify-between'>
                <div className='p-10'>
                    <img src={you} className='w-[150px] h-[150px] rounded-full mx-auto' alt="" />
                    <h1 className='text-center text-[30px] font-semibold p-3'>YOUSSEF</h1>
                </div>
                <div className='w-full flex justify-center gap-5 items-center p-10 bg-[#9CA986] rounded-b-xl'>
                    <SiCanva className='text-[50px] p-2 bg-white rounded-full' />
                    <h1 className='text-[30px] font-semibold text-white'>designer</h1>
                </div>
            </div>
            <div className='h-[45vh] w-[350px] border-4 border-black rounded-xl flex flex-col items-center justify-between'>
                <div className='p-10'>
                    <img src={sal} className='w-[150px] h-[150px] rounded-full mx-auto' alt="" />
                    <h1 className='text-center text-[30px] font-semibold p-3'>SALMA</h1>
                </div>
                <div className='w-full flex justify-center gap-5 items-center p-10 bg-[#BC9F8B] rounded-b-xl'>
                    <FaPen className='text-[50px] p-2 bg-white rounded-full' />
                    <h1 className='text-[30px] font-semibold text-white'>writer</h1>
                </div>
            </div>
            <div className='h-[45vh] w-[350px] border-4 border-black rounded-xl flex flex-col items-center justify-between'>
                <div className='p-10'>
                    <img src={moh} className='w-[150px] h-[150px] rounded-full mx-auto' alt="" />
                    <h1 className='text-center text-[30px] font-semibold p-3'>MOHAMMED</h1>
                </div>
                <div className='w-full flex justify-center gap-5 items-center p-10 bg-[#3C3D37] rounded-b-xl'>
                    <IoSearch className='text-[50px] p-2 bg-white rounded-full' />
                    <h1 className='text-[30px] font-semibold text-white'>research</h1>
                </div>
            </div>
            <div className='h-[45vh] w-[350px] border-4 border-black rounded-xl flex flex-col items-center justify-between'>
                <div className='p-10'>
                    <img src={far} className='w-[150px] h-[150px] rounded-full mx-auto' alt="" />
                    <h1 className='text-center text-[30px] font-semibold p-3'>FARAH</h1>
                </div>
                <div className='w-full flex justify-center gap-5 items-center p-10 bg-[#96CEB4] rounded-b-xl'>
                    <IoSearch className='text-[50px] p-2 bg-white rounded-full' />
                    <h1 className='text-[30px] font-semibold text-white'>research</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team