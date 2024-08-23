import React from 'react'
import dumb from '../assets/dumb.png'
import { FaFire } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import sbag from '../assets/sbag.jpeg'
import sfot from '../assets/sfot.jpg'
import sgog from '../assets/sgog.jpeg'
import sbas from '../assets/sbas.jpg'
import sten from '../assets/sten.jpg'

const SportsProducts = () => {
    const products = [
        {
            name: '5kg dummbles',
            image: dumb
        },
        {
            name: '10kg dummbles',
            image: dumb
        },
        {
            name: '15kg dummbles',
            image: dumb
        },
        {
            name: '20kg dummbles',
            image: dumb
        },
    ]
    const products_2 = [
        {
            name: 'swimming googgles',
            image: sgog
        },
        {
            name: 'footbal',
            image: sfot
        },
        {
            name: 'tennis',
            image: sten
        },
        {
            name: 'basket',
            image: sbas
        },
    ]
    return (
        <div className='h-[140vh]'>
            <div>
                <h1 className='text-[50px] font-semibold m-10'>popular</h1>
                <div className='flex '>
                    <div className='flex justify-between w-full px-10'>
                        {products_2.map((prodcut) => (
                            <div className='rounded-lg flex shadow-md shadow-black gap-3 text-black'>
                                <img className='rounded-lg w-[250px] object-cover h-[270px]' src={prodcut.image} alt="" />
                                <div className=' flex flex-col gap-3 p-3'>
                                    <div>
                                        <h1 className='font-semibold text-[25px] pr-3'>{prodcut.name}</h1>
                                        <p className='text-[15px]'>{prodcut.des}</p>
                                    </div>
                                    <div className='flex gap-2 mt-24'>
                                        <div className='w-[130px] flex items-center justify-center rounded-xl bg-green-600 mt-11 p-3 text-[20px] text-white'><FaCartPlus /></div>
                                        <div className='w-[45px] mt-11 border-2 rounded-full border-black flex items-center justify-center text-red-500'><FaHeart /></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-[50px] font-semibold m-10'>dumbs</h1>
                <div className='flex '>
                    <div className='flex w-full justify-between px-10'>
                        {products.map((prodcut) => (
                            <div className='rounded-lg flex shadow-md shadow-black gap-3 text-black'>
                                <img className='rounded-lg w-[250px] object-cover h-[260px]' src={prodcut.image} alt="" />
                                <div className=' flex flex-col gap-3  p-3'>
                                    <div>
                                        <h1 className='font-semibold text-[25px] pr-3'>{prodcut.name}</h1>
                                        <p className='text-[15px]'>{prodcut.des}</p>
                                    </div>
                                    <div className='flex gap-2 mt-24'>
                                        <div className='w-[130px] flex items-center justify-center rounded-xl bg-green-600 mt-11 p-3 text-[20px] text-white'><FaCartPlus /></div>
                                        <div className='w-[45px] mt-11 border-2 rounded-full border-black flex items-center justify-center text-red-500'><FaHeart /></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default SportsProducts