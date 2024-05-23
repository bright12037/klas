'use client'
import React from 'react'
import Image from 'next/image';
import logo from './DashboardCompo/dashimages/klas-logo.svg'
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";

const Footer = () => { 
  return (
    <div className='bg-blue-700'>
      <div className='flex p-10  items-center pb-0'>
        <div className=' cursor-pointer flex py-2 items-center'>
        <Image src={logo} alt='' width={50}/>
        <h2 className='text-white text-xl font-extrabold cursor-pointer'>Klas</h2>
        </div>
        <div className='flex ml-auto py-4 gap-10 items-center'>
        <p className='text-white cursor-pointer'><FaSquareInstagram /></p>
        <p className='text-white cursor-pointer'><FaTwitter /></p>
        <p className='text-white cursor-pointer'><FaLinkedin /></p>
        </div>
      </div>

      <div className='flex py-10 gap-8 justify-center  cursor-pointer'>
        <p className='hover:text-slate-400'>Home</p>
        <p className='hover:text-slate-400'>Pricing</p>
        <p className='hover:text-slate-400'>Company</p>
        <p className='hover:text-slate-400'>Case studies</p>
        <p className='hover:text-slate-400'>Products</p>
        <p className='hover:text-slate-400'>Terms Of Use</p>
        <p className='hover:text-slate-400'>Privacy Policy</p>
      </div>

      <div className='  items-center'> 
        <p className=' flex gap-1 items-center justify-center text-slate-400 '><LuCopyright /> Klas Global, Inc.</p>
      </div>
    </div>
  )
}

export default Footer