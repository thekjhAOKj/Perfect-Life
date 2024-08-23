import React, { useEffect, useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import brain from '../assets/brain.png'
import salad from '../assets/salad.png'
import dumb from '../assets/dumbbell.png'
import heart from '../assets/heart-beat.png'
import profile from '../assets/profile_img.png'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'


const SideBar = () => {
    const [userDetails , setUserDetails] = useState('')
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user)
            const docRef = doc(db , 'Users' , user.uid)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            } else {
                console.log('user is not logged in')
            }
        })
    }
    useEffect(() => {
        fetchUserData()
    } , [])
    return (
        <div className='w-[22%] h-[91.2vh] bg-[#1E201E] rounded-tr-[25px] py-10'>
            <div className='flex items-end h-[10vh] mb-10 gap-4 px-20'><img className='w-[60px] rounded-3xl border-4 border-aesYell' src={profile} alt="" /><h1 className='text-white  font-semibold text-[30px]'>Hi , {userDetails.disName}</h1></div>
            <div className='text-white pr-6 flex flex-col gap-10 font-semibold'>
            <Link to={'/home'} className=' font-semibold text-[30px] flex  items-center gap-5 px-20 bg-white rounded-r-3xl text-black '><AiFillHome className='text-black text-[50px] p-3 rounded-full bg-white' />overview</Link>
                <Link to={'/nutrition'} className=' font-semibold text-[30px] flex  items-center gap-5 px-20 '><img className='p-3 rounded-full w-[50px] bg-white' src={salad} />nutrition</Link>
                <Link to={'/sports'} className=' font-semibold text-[30px] flex  items-center gap-5 px-20 pr-28 '><img className='p-3 rounded-full w-[50px] bg-white' src={dumb} />sport</Link>
                <Link to={'/mental'} className=' font-semibold text-[30px] flex  items-center gap-5 px-20 '><img className='p-3 rounded-full w-[50px] bg-white' src={brain} />mental</Link>
            </div>
        </div>
    )
}

export default SideBar