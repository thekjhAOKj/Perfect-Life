import React from 'react'


const StoreHero = () => {
  return (
    <div className='h-[60vh] border-black border-2 herBg flex items-center flex-col'>
      <h1 className='text-[100px] text-white text-center mt-[15vh]'>FOOD STORE</h1>
      <p className='text-gray-100 text-[20px] font-semibold text-center p-3 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, recusandae?</p>
      <input type="text" className='h-[5vh] p-5 w-[60%] rounded-full' placeholder='search for recipes' />
    </div>
  )
}

export default StoreHero