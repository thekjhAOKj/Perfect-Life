import React from 'react'
import { GiMonsteraLeaf } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidComment } from "react-icons/bi";
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className='px-20 py-6 flex justify-between mx-auto'>
            <div className='flex gap-2 items-center text-[40px]'>
                <GiMonsteraLeaf className='text-green-700' />
                <Link to={'/'} className='font-semibold'>PERFECT LIFE</Link>
            </div>
            <div className='flex justify-between px-10 py-2 items-center text-black min-w-[700px] font-semibold text-[25px]'>
               <div className='p-3 transition-all duration-300 rounded-full cursor-pointer'>HOME</div> 
                <div className='p-3 transition-all duration-300 rounded-full cursor-pointer'>ABOUT</div>
                <div className='p-3 transition-all duration-300 rounded-full cursor-pointer'>SERVICES</div>
                <div className='p-3 transition-all duration-300 rounded-full cursor-pointer'>TEAM</div>
            </div>
            <div className='flex items-center gap-5'>
                <Link to={'./signup'} className='bg-main text-white px-5 py-3 font-semibold rounded-md drop-shadow-md btnsh'>SIGN UP</Link>
                <Link to={'./login'} className='bg-main text-white px-5 py-3 font-semibold rounded-md btnsh'>LOG IN</Link>
            </div>
        </div>
    )
}

export default Nav