'use client'
import React from 'react'
import './Navbar.css'
import Image from 'next/image';
import logo from './DashboardCompo/dashimages/klas-logo.svg'

const Navbar = () => {
  return (
    <div>
      
      <div className=' p-10  items-center pb-0'>
      <div className='flex py-2 items-center bg-white rounded-lg'>
       <Image src={logo} alt='' width={70}/>
      <h2 className='text-blue-700 text-3xl font-extrabold cursor-pointer'>Klas</h2>
      <div className='flex ml-80 gap-8 cursor-pointer'>
            <p className='text-blue-600 hover:text-blue-600'></p>
            <p className='text-blue-600 hover:text-blue-600'>Home</p>
            <p className='text-gray-300 hover:text-blue-600'>Pricing</p>
            <p className='text-gray-300 hover:text-blue-600'>Company</p>
            <p className='text-gray-300 hover:text-blue-600'>Case Studies</p>
            <p className='text-gray-300 hover:text-blue-600'>Blog</p>   
        </div>
        <div className='flex gap-8 ml-20 items-center'>
        <p className='text-blue-600'></p>
            <p className='text-blue-600 cursor-pointer'>Login</p>
            <button className=' py-4 px-6 cursor-pointer  rounded-md border-none bg-blue-700 '>Sign up free</button>
          </div>
      </div>
      </div>
      <div>
        

        <div>
         
        </div>
      </div>

    </div>
  )
}

export default Navbar