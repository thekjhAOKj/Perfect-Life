import React from 'react'
import { FaFire } from "react-icons/fa6";
import { TbMeat } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import pancakes from '../assets/pancakes.jpg'
import cole from '../assets/cole.jpg'
import fitu from '../assets/fitu.jpg'
import seasalad from '../assets/seasalad.jpg'



const Products = () => {
  const products = [
    {
        name : 'protein pancakes',
        des : 'eggs , oil , oats , banana',
        image : pancakes,
        cal : 25,
        prot : 4
    },
    {
        name : 'fituchini',
        des : 'pasta , eggs , chicken , vigies',
        image : fitu,
        cal : 40,
        prot : 25
    },
    {
        name : 'shrimp salad',
        des : 'shrimp , vegies , corn',
        image : seasalad,
        cal : 50,
        prot : 30
    },
    {
        name : 'coleslaw',
        des : 'lettuce , carrots , mayo',
        image : cole,
        cal : 23,
        prot : 3
    },
  ]  
  return (
    <div className='h-[140vh]'>
        <div>
            <h1 className='text-[50px] font-semibold m-10'>POPULAR</h1>
            <div className='flex '>
                <div className='flex justify-between w-full h-[23vh] px-10'>
                    {products.map((prodcut) => (
                        <div className='rounded-lg flex shadow-md shadow-black gap-3 text-black'>
                        <img className='rounded-lg w-[250px] object-cover h-full' src={prodcut.image} alt="" />
                        <div className=' flex flex-col gap-3 p-3'>
                            <div>
                                <h1 className='font-semibold text-[25px] pr-3'>{prodcut.name}</h1>
                                <p className='text-[15px]'>{prodcut.des}</p>
                            </div>
                            <div className='flex items-center text-[20px] gap-5'><FaFire className='text-orange-500' /><h1>{prodcut.cal} cal</h1></div>
                            <div className='flex items-center text-[20px] gap-5'><TbMeat className='text-red-500' /><h1>{prodcut.prot} grams</h1></div>
                            <div className='flex gap-2'>
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
            <h1 className='text-[50px] font-semibold m-10'>FRESH ARRIVALS</h1>
            <div className='flex '>
                <div className='flex w-full h-[23vh] justify-between px-10'>
                    {products.map((prodcut) => (
                        <div className='rounded-lg flex shadow-md shadow-black gap-3 text-black'>
                            <img className='rounded-lg w-[250px] object-cover h-full' src={prodcut.image} alt="" />
                            <div className=' flex flex-col gap-3 p-3'>
                                <div>
                                    <h1 className='font-semibold text-[25px] pr-3'>{prodcut.name}</h1>
                                    <p className='text-[15px]'>{prodcut.des}</p>
                                </div>
                                <div className='flex items-center text-[20px] gap-5'><FaFire className='text-orange-500' /><h1>{prodcut.cal} cal</h1></div>
                                <div className='flex items-center text-[20px] gap-5'><TbMeat className='text-red-500' /><h1>{prodcut.prot} grams</h1></div>
                                <div className='flex gap-2'>
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
            <h1 className='text-[50px] font-semibold m-10'>POPULAR</h1>
            <div className='flex '>
                <div className='flex justify-between h-[23vh] w-full px-10'>
                    {products.map((prodcut) => (
                        <div className='rounded-lg flex shadow-md shadow-black gap-3 text-black'>
                        <img className='rounded-lg w-[250px] object-cover h-full' src={prodcut.image} alt="" />
                        <div className=' flex flex-col gap-3 p-3'>
                            <div>
                                <h1 className='font-semibold text-[25px] pr-3'>{prodcut.name}</h1>
                                <p className='text-[15px]'>{prodcut.des}</p>
                            </div>
                            <div className='flex items-center text-[20px] gap-5'><FaFire className='text-orange-500' /><h1>{prodcut.cal} cal</h1></div>
                            <div className='flex items-center text-[20px] gap-5'><TbMeat className='text-red-500' /><h1>{prodcut.prot} grams</h1></div>
                            <div className='flex gap-2'>
                                <div className='w-[130px] flex items-center justify-center rounded-xl bg-green-600 mt-11 p-3 text-[20px] text-white'><FaCartPlus /></div>
                                <div className='w-[45px] mt-11 border-2 rounded-full border-black flex items-center justify-center text-red-500'><FaHeart /></div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products