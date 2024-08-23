import React, { useState } from 'react'
import Nav from '../components/Nav'
import forest from '../assets/logbg.jpg'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [wrong , setWrong] = useState('')
  const [wrongLog , setWrongLog] = useState('')
  const [email, setEmail] = useState('')
  const [Password, setPasswrod] = useState('')
  const [emailLog, setEmailLog] = useState('')
  const [PasswordLog, setPasswrodLog] = useState('')
  const [userName, setUserName] = useState('')

  const handelReg = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, Password)
      const user = auth.currentUser
      console.log(user)
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          disName: userName,
        })
      }
      console.log('user ok !')
      alert('user registered successfully !')
      window.location.href = '/login'
    } catch (err) {
      console.log(err)
      setWrong(err.toString().substr(25))
    }
  }

  return (
    <div className='h-[100vh] w-full flex justify-end'>
      <div className='flex justify-center flex-col items-center gap-5 w-[50%]'>
        <div className='flex gap-6 flex-col'>
          <h1 className='text-[30px] text-center font-bold'>SIGN UP</h1>
          <div className='h-[55vh] w-[600px] rounded-xl bg-black text-white p-10'>
            <h1 className='font-semibold text-[20px] mb-3'>Email</h1>
            <input type="text" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} id='sign' className='border-0 text-black outline-none w-full py-3 px-3 rounded-xl mb-5' />
            <h1 className='font-semibold text-[20px] mb-3'>User name</h1>
            <input type="text" placeholder='Enter your User name' onChange={(e) => setUserName(e.target.value)} id='sign2' className='border-0 text-black outline-none w-full py-3 px-3 rounded-xl mb-5' />
            <h1 className='font-semibold text-[20px] mb-3'>Password</h1>
            <input type="text" placeholder='Enter your Password' onChange={(e) => setPasswrod(e.target.value)} id='sign3' className='border-0 text-black outline-none w-full py-3 px-3 rounded-xl mb-5' />
            <Link to={'/login'} className='font-semibold text-gray-300 cursor-pointer'>Already have an account ? login </Link>
            <p className='text-aesRed text-[20px]'>{wrong}</p>
            <div onClick={handelReg} className='bg-white w-fit text-black px-16 py-5 font-semibold text-[18px] rounded-xl mx-auto mt-10 cursor-pointer'>SIGN UP</div>
          </div>
        </div> 
          
      </div>
      <div className='w-[50%]'><img className='h-[100vh] object-cover' src={forest} alt="" /></div>
    </div>
  )
}

export default SignUp