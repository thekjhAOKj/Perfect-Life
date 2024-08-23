import React, { useState } from 'react'
import Nav from '../components/Nav'
import forest from '../assets/logbg.jpg'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Login = () => {
  const [wrong , setWrong] = useState('')
  const [email, setEmail] = useState('')
  const [Password, setPasswrod] = useState('')
  const [userName, setUserName] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault
    try {
      await signInWithEmailAndPassword(auth , email , Password)
      console.log('user login success')
      window.location.href = '/home'
    } catch(err) {
      setWrong(err.toString().substr(25))
    }
  }

  return (
    <div className='h-[100vh] w-full flex justify-end'>
      <div className='flex justify-center flex-col items-center gap-5 w-[50%]'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[30px] text-center font-bold'>LOGIN</h1>
            <div className='h-[45vh] w-[600px] rounded-xl bg-black text-white p-10'>
              <h1 className='font-semibold text-[20px] mb-3'>Email</h1>
              <input type="text" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} id='log' className='border-0 outline-none text-black w-full py-3 px-3 rounded-xl mb-5' />
              <h1 className='font-semibold text-[20px] mb-3'>Password</h1>
              <input type="text" placeholder='Enter your Password' onChange={(e) => setPasswrod(e.target.value)} id='log2' className='border-0 outline-none text-black w-full py-3 px-3 rounded-xl mb-5' />
              <Link to={'/signup'} className='font-semibold text-gray-300 cursor-pointer'>New to perfect life ? SIGN UP </Link>
              <div  onClick={handleLogin} className='bg-white w-fit text-black px-16 py-5 font-semibold text-[18px] rounded-xl mx-auto mt-11 cursor-pointer'>LOGIN</div>
              <p className='text-aesRed text-[20px]'>{wrong}</p>
            </div>
          </div>
          
      </div>
      <div className='w-[50%]'><img className='h-[100vh] w-400px object-cover' src={forest} alt="" /></div>
    </div>
  )
}

export default Login