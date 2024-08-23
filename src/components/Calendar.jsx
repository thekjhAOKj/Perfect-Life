import React, { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday, subDays, isSameDay } from 'date-fns'
import clsx from 'clsx'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid , PieChart } from 'recharts'
import { IoMdWater } from "react-icons/io";
import { FaPersonRunning } from "react-icons/fa6";
import { RiBook2Line } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import {collection , addDoc} from 'firebase/firestore'





const Calendar = () => {
    const [value, onChange] = useState('10:00');
    const daysData = [
        {
            day : 1,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 2,
            water : 5,
            run : 2,
            read : 14,
            sleep : 7,
            tasks : [
                'make the bed',
                'maths homework',
                'go shopping'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 3,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 4,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 5,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 6,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 7,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 8,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 9,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 10,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 11,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 12,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 13,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 14,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 15,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 16,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 17,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 18,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 19,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 20,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 21,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 22,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 23,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 24,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 25,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 26,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 27,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 28,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 29,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 30,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
        {
            day : 31,
            water : 7,
            run : 5,
            read : 10,
            sleep : 8,
            tasks : [
                'walk the dog',
                'take a showe',
                'play tennis'
            ],
            events : [
                {
                    title : 'gym',
                    time : '7 AM'
                },
                {
                    title : 'doctor',
                    time : '5 PM'
                },
                {
                    title : 'lunch',
                    time : '3 PM'
                },
            ]
        },
    ]
    const activity = [
        {
            name : 'sleep',
            value : 1000
        },
        {
            name : 'sports',
            value : 2000
        },
        {
            name : 'calories',
            value : 4000
        },
        {
            name : 'water',
            value : 3000
        }
    ]
    const [view , setView] = useState(false)
    const currentDate = new Date()
    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)
    const daysOfMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })
    const [menDay , setMenDay] = useState('')
    const weekDays = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
    const startingDayI = getDay(firstDayOfMonth)
    return (
        <div className='container mx-auto p-4'>
            <div className= {clsx('grid-cols-7 gap-2 grid' , {'hidden' : view === true})}>
                {weekDays.map((day) => (
                    <div key={day} className='text-center font-semibold'>{day}</div>
                ))}
                {Array.from({ length: startingDayI }).map((_, i) => (
                    <div className='border-2 border-black rounded-md p-2 text-center h-[10vh]' key={`empty-${i}`}></div>
                ))}
                {daysOfMonth.map((day, i) => (
                    <div onClick={() => {setView(true)
                        setMenDay(format(day, 'd'))
                        console.log(menDay)
                    }} key={i} className={clsx('border-2 border-black rounded-md p-2 text-center h-[10vh] cursor-pointer', { 'bg-main text-gray-50': isToday(day) })}>
                        {format(day, 'd')}
                    </div>
                ))}
            </div>
            {view === true ? <div>
                <div className='flex gap-3 items-center'>
                    <h1 className='text-black text-[30px] font-bold'>Day {menDay}</h1>
                    <div className='font-bold text-[20px] cursor-pointer' onClick={() => setView(false)}>x</div>
                </div>
                <div className='flex'>
                    <div className='w-[70%] h-[53vh]'>
                        <BarChart className='font-bold' width={700} height={300} data={activity}>
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis />
                            <Tooltip />
                            <CartesianGrid stroke="" strokeDasharray="5 5" />
                            <Bar dataKey="value" fill="black"  barSize={100} />
                        </BarChart>
                        <div className='flex gap-3'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-[20px] font-semibold'>TASKS</h1>
                                {daysData.filter((day) => day.day == menDay)[0].tasks.map((task) => (
                                    <div className='p-3 flex justify-between w-[350px] font-semibold border-4 rounded-md border-black'>
                                    <h1 className='text-[20px]'>{task}</h1>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-[20px] font-semibold'>EVENTS</h1>
                                {daysData.filter((day) => day.day == menDay)[0].events.map((event) => (
                                    <div className='p-3 flex text-[20px] w-[350px] justify-between font-semibold border-4 rounded-md border-black'>
                                        <h1>{event.title}</h1>
                                        <h1>{event.time}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='px-3'>
                            <h1 className='text-[20px] font-bold'>ADD TASK</h1>
                            <div className='flex items-center gap-3'>
                                <input type="text" className='border-2 rounded-full border-black px-2 w-[242px]' />
                                <div className='text-center text-white font-bold cursor-pointer bg-black h-[28px] px-3 rounded-lg'>+</div>
                            </div>
                            <h1 className='text-[20px] font-bold mt-5'>ADD EVENT</h1>
                            <div>
                                <div className='flex items-center gap-3'>
                                    <input type="text" className='border-2 border-black px-2 rounded-full w-[242px]' />
                                    <div className='text-center text-white font-bold cursor-pointer bg-black h-[28px] px-3 rounded-lg'>+</div>
                                </div>
                                <div>
                                    <input type="datetime-local" className=' w-[242px] font-bold' name="" id="" />
                                </div>                                
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='h-[30px] bg-aesBlue border-4 border-black rounded-md flex items-center justify-between py-10 px-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <IoMdWater className='text-white text-[30px]' />
                                    <h1 className='text-white font-semibold text-[25px]'>water</h1>
                                </div>
                                <h1 className='font-bold text-white text-[40px]'>7 cups</h1>
                                </div>
                                <div className='h-[30px] bg-aesRed border-4 border-black rounded-md flex items-center justify-between py-10 px-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <FaPersonRunning className='text-white text-[30px]' />
                                    <h1 className='text-white font-semibold text-[25px]'>run</h1>
                                </div>

                                <h1 className='font-bold text-white text-[40px]'>5 km</h1>
                                </div>
                                <div className='h-[30px] bg-[#E7D4B5] border-4 border-black rounded-md flex items-center justify-between py-10 px-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <RiBook2Line className='text-white text-[30px]' />
                                    <h1 className='text-white font-semibold text-[25px]'>read</h1>
                                </div>

                                <h1 className='font-bold text-white text-[40px]'>10 pages</h1>
                                </div>
                                <div className='h-[30px] bg-[#55679C] border-4 border-black rounded-md flex items-center justify-between py-10 px-5'>
                                <div className='flex flex-col justify-center items-center'>
                                    <IoMoon className='text-white text-[30px]' />
                                    <h1 className='text-white font-semibold text-[25px]'>sleep</h1>
                                </div>
                                <h1 className='font-bold text-white text-[40px]'>8 hours</h1>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div> : null}
        </div>
    )
}

export default Calendar