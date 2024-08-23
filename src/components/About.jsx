import React from 'react'
import healthy from '../assets/healthyMan.jpg'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='mt-[300px] flex gap-20 px-32'>
        <div className='w-[500px] h-[50vh]'>
          <img src={about} className='rounded-[40px]' alt="" />
        </div>
        <div className='relative'>
          <h1 className='text-[60px] font-bold'>ABOUT</h1>
          <div>
            <p className='w-[1000px] text-[20px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia animi asperiores omnis et ipsam obcaecati harum non! Labore enim autem dicta molestias iure ducimus eaque temporibus iusto, esse facilis laboriosam vero magnam nemo voluptates nihil. Perferendis earum deserunt temporibus ullam repudiandae dignissimos similique quos officia, rem sed ratione ex, velit enim esse. Recusandae, quae esse. Minus ipsum ea quia odit, eius quaerat laudantium praesentium beatae obcaecati rem saepe voluptatem iste! Aspernatur eos iste aut eum similique blanditiis quod repellendus ratione mollitia laborum, sapiente quidem tempora, dignissimos perspiciatis, adipisci reiciendis! Ex itaque laborum porro dignissimos ipsum molestiae ipsa consequuntur tenetur voluptatum.</p>
            <div className='flex absolute bottom-0 left-0 gap-20'>
              <div>
                <h1 className='font-bold text-[80px] text-center text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text'>100k</h1>
                <h1 className='text-center text-[40px] font-semibold'>customers</h1>
              </div>
              <div>
                <h1 className='font-bold text-[80px] text-center text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text'>20k</h1>
                <h1 className='text-center text-[40px] font-semibold'>customers</h1>
              </div>
              <div>
                <h1 className='font-bold text-[80px] text-center text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text'>900</h1>
                <h1 className='text-center text-[40px] font-semibold'>customers</h1>
              </div>
              <div>
                <h1 className='font-bold text-[80px] text-center text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text'>1k</h1>
                <h1 className='text-center text-[40px] font-semibold'>customers</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About