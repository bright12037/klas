'use client'
import React from 'react'
import { useState } from 'react'

import logo from './dashimages/klas-logo.svg'
import Image from 'next/image'
import profile from  './dashimages/image.webp'

import { BiSolidHomeCircle } from "react-icons/bi";
import { RiRecordCircleFill } from "react-icons/ri";
import { AiFillContainer } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { PiTrashSimpleFill } from "react-icons/pi";
import { IoTriangle } from "react-icons/io5";

const NavbarSection = () => {
        const[Section1, setSection1] =useState(true)
        const[Section2, setSection2] =useState(false)
        const[Section3, setSection3] =useState(false)
        const[Section4, setSection4] =useState(false)
        const[Section5, setSection5] =useState(false)

      const showSection1 = () => {
        setSection1(true)
        setSection2(false)
        setSection3(false)
        setSection4(false)
        setSection5(false)
      }

      const showSection2 = () => {
        setSection1(false)
        setSection2(true)
        setSection3(false)
        setSection4(false)
        setSection5(false)
      }

      const showSection3 = () => {
        setSection1(false)
        setSection2(false)
        setSection3(true)
        setSection4(false)
        setSection5(false)
      }

      const showSection4 = () => {
        setSection1(false)
        setSection2(false)
        setSection3(false)
        setSection4(true)
        setSection5(false)
      }

      const showSection5 = () => {
        setSection1(false)
        setSection2(false)
        setSection3(false)
        setSection4(false)
        setSection5(true)
      }

  return (
    <div className='font-dmsans'>
      <nav className='hidden lg:mx-8 lg:flex lg:text-white lg:font-bold lg:text-sm lg:my-8'>
          <div className='flex items-center'>
            <Image className='h-16 w-16' src={logo} />
            <h1 className='text-blue-600 text-3xl'>Klas</h1>
          </div>
          <div className='ml-auto flex items-center gap-4'>
            <p className='text-blue-600 boder-solid border py-3 px-8 rounded-lg border-blue-500'>Try Pro</p>
            <p className='px-10 py-3 bg-blue-600 rounded-lg font-sans'>Create a content</p>
            <Image className='rounded-full h-10 w-10' src={profile} />
          </div>
      </nav>


      <section className='pt-1 px-2 md:px-8 lg:mx-8 rounded-lg font-dmsans bg-blue-600 text-white md:pt-12  '>
        <div className=''>
          <h1 className='hidden lg:block lg:text-4xl lg:font-semibold lg:text-center lg:font-sans'>What will you teach today?</h1>
          <p className='text-center text-black md:my-6 md:block flex items-center gap-2 justify-center mt-8'><input className='md:pr-96 md:pl-3 md:py-2 py-2 pl-6 rounded-lg' type="text" placeholder='Search for your content' /> <Image className='md:hidden rounded-full h-10 w-10' src={profile} /></p>
        </div>
        <div className='flex justify-center md:gap-24 gap-2 py-6 '>
            <div onClick={showSection1} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section1===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><BiSolidHomeCircle /></p>
              <p className='font-sans text-sm font-normal'>Home</p>
              {Section1===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection2} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section2===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><AiFillContainer /></p>
              <p className='font-sans text-sm font-normal'>Content</p>
              {Section2===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection3} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section3===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><RiRecordCircleFill /></p>
              <p className='font-sans text-sm font-normal'>Recordings</p>
              {Section3===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection4} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section4===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'} ><PiTrashSimpleFill /></p>
              <p className='font-sans text-sm font-normal'>Resources</p>
              {Section4===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection5} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section5===true ? 'text-2xl md:p-4 p-3 bg-slate-400 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><FaUser /></p>
              <p className='font-sans text-sm font-normal'>Settings</p>
              {Section5===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
        </div>
          
      </section>

      <section>
        <div className='pt-8 px-2 md:px-8 lg:mx-8 flex flex-row '>
              <div className='flex gap-8 bg-slate-200 py-4 px-4 rounded-lg shadow-xl '>
                  <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                  <div>
                  <h1 className='text-lg'>Total Students</h1>
                  <h1 className='text-4xl font-bold'>0</h1>
                  </div>
              </div>
              <div className='flex gap-8 bg-slate-200 py-4 px-4 rounded-lg shadow-xl '>
                  <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                  <div>
                  <h1 className='text-lg'>Total Students</h1>
                  <h1 className='text-4xl font-bold'>0</h1>
                  </div>
              </div>
              <div className='flex gap-8 bg-slate-200 py-4 px-4 rounded-lg shadow-xl '>
                  <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                  <div>
                  <h1 className='text-lg'>Total Students</h1>
                  <h1 className='text-4xl font-bold'>0</h1>
                  </div>
              </div>
        </div>
      
      
      </section>




    </div>
  )
}

export default NavbarSection
