'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

import logo from './dashimages/klas-logo.svg'
import resource from './dashimages/resource.PNG'
import record from './dashimages/record.PNG'
import Image from 'next/image'
import profile from  './dashimages/image.webp'

import { BiSolidHomeCircle } from "react-icons/bi";
import { RiRecordCircleFill } from "react-icons/ri";
import { AiFillContainer } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { PiTrashSimpleFill } from "react-icons/pi";
import { IoTriangle } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5"; 
import { CiBank } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

const NavbarSection = () => {
        const[Section1, setSection1] =useState(true)
        const[Section2, setSection2] =useState(false)
        const[Section3, setSection3] =useState(false)
        const[Section4, setSection4] =useState(false)
        const[Section5, setSection5] =useState(false)
        const[Drop, setDrop] = useState(false)
        const[Color, setColor] = useState(true)
        const[Color2, setColor2] = useState(false)
        const[Color3, setColor3] = useState(false)
        const[Bank, setBank] = useState(false)
        const[Profile, setProfile] = useState(false)

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

      const showDrop = () => {
        setDrop(!Drop)
      } 

      const showColor = () => {
        setColor(true)
        setColor2(false)
        setColor3(false)
      } 

       const showColor2 = () => {
        setColor(false)
        setColor2(true)
        setColor3(false)
      }

       const showColor3 = () => {
        setColor(false)
        setColor2(false)
        setColor3(true)
      }

      const showProfile = () => {
        setBank(false)
        setProfile(!Profile)
      }
      const showBank = () => {
        setBank(!Bank)
        setProfile(true)
      }


  return (
    <div className='font-dmsans'> 
      <nav className='hidden lg:mx-8 lg:flex lg:text-white lg:font-bold lg:text-sm lg:my-8'>
          <div className='flex items-center cursor-pointer'>
            <Image className='h-16 w-16' src={logo} />
            <h1 className='text-blue-700 text-3xl'>Klas</h1>
          </div>
          <div className='ml-auto flex items-center gap-4'>
            <p className='text-blue-700 boder-solid border py-3 px-8 rounded-lg border-blue-700 cursor-pointer'>Try Pro</p>
            <p className='px-10 py-3  bg-gradient-to-l from-purple-600 via-blue-700 to-blue-700 rounded-lg font-sans cursor-pointer'>Create a content</p>
            <Image className='rounded-full h-10 w-10 lg:h-12 lg:w-12 cursor-pointer' src={profile} />
          </div>
      </nav>


      <section className='pt-1 px-2 md:px-8 lg:mx-8 rounded-lg font-dmsans bg-gradient-to-r from-purple-600 via-blue-700 to-blue-700 text-white md:pt-12  '>
        <div className=''>
          <h1 className='hidden lg:block lg:text-4xl lg:font-semibold lg:text-center lg:font-sans'>What will you teach today?</h1>
          <p className='text-center text-black md:my-6 md:block flex items-center gap-2 justify-center mt-8'><input className='md:pr-96 md:pl-3 md:py-2 py-2 pl-6 rounded-lg' type="text" placeholder='Search for your content' /> <Image className='md:hidden rounded-full h-10 w-10' src={profile} /></p>
        </div>
        <div className='flex justify-between md:justify-center md:gap-24 gap py-6 mx-2 '>
            <div onClick={showSection1} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section1===true ? 'text-2xl md:p-4 p-3 bg-blue-200 text-blue-800 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><BiSolidHomeCircle /></p>
              <p className='font-sans text-sm font-normal'>Home</p>
              {Section1===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection2} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section2===true ? 'text-2xl md:p-4 p-3 bg-blue-200 text-blue-700 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><AiFillContainer /></p>
              <p className='font-sans text-sm font-normal'>Content</p>
              {Section2===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection3} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section3===true ? 'text-2xl md:p-4 p-3 bg-blue-200 text-blue-700 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><RiRecordCircleFill /></p>
              <p className='font-sans text-sm font-normal'>Recordings</p>
              {Section3===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection4} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section4===true ? 'text-2xl md:p-4 p-3 bg-blue-200 text-blue-700 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'} ><PiTrashSimpleFill /></p>
              <p className='font-sans text-sm font-normal'>Resources</p>
              {Section4===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
            <div onClick={showSection5} className='flex flex-col items-center cursor-pointer relative'>
              <p className={Section5===true ? 'text-2xl md:p-4 p-3 bg-blue-200 text-blue-700 rounded-full mb-2': 'text-2xl md:p-4 p-3 bg-white text-blue-800 rounded-full mb-2'}><FaUser /></p>
              <p className='font-sans text-sm font-normal'>Settings</p>
              {Section5===true ? (<div className='text-4xl absolute bottom-2 bottom-[-35px] left-2'>
                  <IoTriangle/>
              </div>): ''}
            </div>
        </div>
          
      </section>

      {Section1===true ? ( <section className='px-2 md:px-8 lg:mx-2 relative'>
              <div className='hidden lg:block pt-8'>
                    <div className='grid grid-cols-2 pb-8 gap-4'>
                        <div className='flex gap-8 bg-white-200 py-6 px-8 rounded-lg shadow-xl '>
                        <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                        <div>
                        <h1 className='text-lg'>Total Students</h1>
                        <h1 className='text-4xl font-bold'>0</h1>
                        </div>
                    </div>
                    <div className='flex gap-8 bg-white-200 py-6 px-8 rounded-lg shadow-xl '>
                        <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                        <div>
                        <h1 className='text-lg'>Total Students</h1>
                        <h1 className='text-4xl font-bold'>0</h1>
                        </div>
                    </div>
                   </div>
                    <div className='flex gap-8 bg-white-200 py-6 px-8 rounded-lg shadow-xl '>
                        <p className='text-2xl md:p-4 p-3 text-white bg-blue-800 rounded-full mb-2'><IoTriangle/> </p>
                        <div>
                        <h1 className='text-lg'>Total Students</h1>
                        <h1 className='text-4xl font-bold'>0</h1>
                        </div>
                    </div>
              </div>

              <div className='flex items-center lg:mt-8 pt-8 pb-44'>
                <p className='font-semibold text-xl'>Recent Classes</p>
                <p onClick={showDrop} className='ml-auto flex items-center gap-12 shadow-md px-4 py-2 rounded-lg'>Classes <RiArrowDropDownLine/> </p>
              </div>

              {Drop===false ? '' : <div className='flex flex-col absolute bottom-4 right-0 text-lg font-semibold bg-white-200 rounded-lg'>
                <p onClick={showColor} className=  {Color===true ? ('pl-12 pr-20 py-3 bg-sky-200 text-center') : ('pl-8 pr-20 py-3  text-center')} > Classes </p>
                <p onClick={showColor2} className=  {Color2===false ? ('pl-8 pr-20 py-3 text-center') : ('pl-12 pr-20 py-3 bg-sky-200 text-center')}> Ebooks </p>
                <p onClick={showColor3} className=  {Color3===false ? ('pl-8 pr-20 py-3 text-center') : ('pl-12 pr-20 py-3 bg-sky-200 text-center')}>Courses</p>
              </div>}
              </section>) : '' }

            {Section2===true ? <section className='px-2 md:px-8 lg:mx-2 relative'>
                <div className='flex items-center lg:mt-8 pt-8 pb-44'>
                        <p className='font-semibold text-xl'>My Content</p>
                        <p onClick={showDrop} className='ml-auto flex items-center gap-12 shadow-md px-4 py-2 rounded-lg'>Classes <RiArrowDropDownLine/> </p>
                </div>

              </section>: ''}

              {Section3===true ? <section className='px-6 md:px-8 lg:mx-2 relative'>
                <div className='flex items-center lg:mt-8 pt-12 pb-4'>
                        <p className='font-semibold md:text-xl text-lg'>Class recordings</p>
                        <p onClick={showDrop} className='ml-auto shadow-md md:pl-44 pl-16 text-xl md:pr-6 pr-2 md:py-4 py-4 boder-solid border rounded-lg'> <RiArrowDropDownLine/> </p>
                  </div>

                  <div className='flex items-center flex-col justify-center py-10'>
                              <Image src={record} />
                              <p className='text-lg text-gray-500 font-semibold'>No recordings yet</p>
                  </div> 



              </section>: ''}


             {Section4===true ? <section className='px-6 md:px-8 lg:mx-2 relative'>
                          <div className='lg:mt-8 pt-12 pb-4'>
                                <p className='font-semibold text-xl '>Resource library</p>
                          </div>
                                
                          <div className='flex items-center'>
                                <p onClick={showDrop} className='shadow-md md:pl-44 pl-24 text-xl md:pr-6 pr-2 md:py-4 md:py-2 py-4 boder-solid border rounded-lg'> <RiArrowDropDownLine/> </p>
                                  <button className='ml-auto px-6 md:py-2 py-4 bg-blue-700 text-white cursor-pointer rounded-lg'> Upoad Link </button>
                          </div> 

                          <div className='flex items-center flex-col justify-center py-10'>
                              <Image src={resource} />
                              <p className='text-lg text-gray-500 font-semibold'>No resources yet</p>
                          </div>        
             </section>: ''}


            {Section5===true ? <section className='grid lg:grid-cols-5 py-16 md:mx-8 mx-2'>

{/* ===============================large screen ========================================================================================= */}

                  <div  className='hidden md:hidden lg:block lg:col-span-1 pl-4 '>
                        <div className='flex gap-4 border-b border-solid border-gray-2 pb-6'>
                            <Image className='rounded-full h-10 w-10' src={profile} alt='user image'/>
                            <div className=''>
                            <p className='font-semibold text-md'>Bright Igwe</p>
                            <p className='text-slate-600 text-sm font-sans'>topkidz02@gmail.com</p>
                            </div>
                        </div>

                        <div className='py-10'>
                          <p onClick={showProfile} className={Profile===false ? ('flex items-center gap-6 font-semibold text-blue-800 text-md font-sans pb-6 cursor-pointer') : ('flex items-center gap-6 text-md font-sans pb-6 cursor-pointer')}> <span className='text-2xl'>< CiUser/></span> Your Profile</p>
                          <p onClick={showBank} className={Bank===true ? ('flex items-center gap-6 text-md font-semibold text-blue-800 font-sans cursor-pointer') : ('flex items-center gap-6 text-md font-sans cursor-pointer')} >  <span className='text-2xl'>< CiBank/></span> Bank Details</p>
                        <Link href="./signuppage"><p className='flex items-center gap-6 text-blue-800 cursor-pointer text-md font-bold font-sans mt-44'> <span className='text-2xl'><IoIosLogOut/></span>Log-out</p></Link> 
                        </div>
                  </div>

                  <div className=' hidden lg:block md:col-span-4 border-l border-solid border-gray-4 px-6'>
                      {Profile ===false ? (<div> 

                        <div>
                          <h1 className='flex items-center text-blue-700 text-xl font-semibold '> <span className='mr-6'><FaAngleRight/> </span> Your Profile</h1>
                        </div>

                        <div className='flex gap-6 items-center pt-8'>
                            <p className='p-6 bg-gray-700 text-2xl text-gray rounded-full'><IoCameraOutline /></p>
                            <p className='text-lg'>Upload your profile photo</p>
                        </div>

                        <form className='text-sm' action=" ">
                            <div className='flex gap-4 pr-44 py-6'>
                              <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2'  type="text" placeholder='Bright Igwe'/>
                              <input  className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2'type="text" placeholder='Enter username'/>
                            </div>

                            <div className='flex gap-4 pr-44 pb-6'>
                              <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Job Title'/>
                              <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Enter number'/>
                            </div>
                            
                            <div className='pb-6'>
                            <input className='border border-solid border-gray w-2/5 h-10 pt-3 pb-44 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Write about yourself in one or two sentence'/>
                            </div>

                        </form>

                        <button className='px-10 py-3 text-white font-semibold text-md  bg-gradient-to-l from-purple-600 via-blue-700 to-blue-700 rounded-lg font-sans'>Update Profile</button> 
                    
                        </div>) : ''}

                      {Bank===false ? '' : <div >
                          <h1 className='flex items-center text-blue-700 text-xl font-semibold cursor-pointer'> <span className='mr-6'><FaAngleRight/> </span> Bank Details</h1>
                          <form action="">
                            <div className='grid grid-cols-2 gap-10 mt-6'>
                                <div className='grid gap-2' >
                                  <label className='text-lg text-bold' htmlFor="">Bank Name</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg' type="text" placeholder='Enter Bank name' />
                                </div>
                                <div className='grid gap-2 '>
                                  <label className='text-lg text-bold' htmlFor="">Account Number</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg' type="text" placeholder='Enter Account Number' />
                                </div>
                                <div className='grid gap-2 '>
                                  <label className='text-lg text-bold' htmlFor="">Account Name</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg' type="text" placeholder='Enter Account Name' />
                                </div>

                            </div>

                          </form>

                          <button className='px-10 py-3 mt-6 text-white font-semibold text-md  bg-gradient-to-l from-purple-600 via-blue-700 to-blue-700 rounded-lg font-sans'>Update Profile</button>

                          </div> }

                  </div>
{/* ===============================tablet screen ========================================================================================= */}
                
                <div className='relative bg-white'>
                  
                  <div  className='hidden md:block lg:hidden md:col-span-1 pl-4 '>
                        <div className='flex gap-4 border-b border-solid border-gray-2 pb-6'>
                            <Image className='rounded-full h-10 w-10' src={profile} alt='user image'/>
                            <div className=''>
                            <p className='font-semibold text-md'>Bright Igwe</p>
                            <p className='text-slate-600 text-sm font-sans'>topkidz02@gmail.com</p>
                            </div>
                        </div>

                        <div className='py-10 px-5'>
                          <p onClick={showProfile} className={Profile===false ? ('flex items-center gap-6 font-semibold text-blue-800 text-md font-sans pb-6 cursor-pointer') : ('flex items-center gap-6 text-md font-sans pb-6 cursor-pointer')}> <span className='text-2xl'>< CiUser/></span> Your Profile</p>
                          <p onClick={showBank} className={Bank===true ? ('flex items-center gap-6 text-md font-semibold text-blue-800 font-sans cursor-pointer') : ('flex items-center gap-6 text-md font-sans cursor-pointer')} >  <span className='text-2xl'>< CiBank/></span> Bank Details</p>
                        <Link href="./signuppage"><p className='flex items-center gap-6 text-blue-800 cursor-pointer text-md font-bold font-sans mt-44'> <span className='text-2xl'><IoIosLogOut/></span>Log-out</p></Link> 
                        </div>
                  </div>
                  
                  <div className=' hidden md:block lg:hidden md:col-span-4 border-l border-solid border-gray-4 px-2 absolute top-0 left-0'>
                        {Profile ===false ? (<div className='bg-white'> 

                          <div>
                            <h1 className='flex items-center text-blue-700 text-xl font-semibold '> <span onClick={showProfile} className='mr-6'><FaAngleRight/> </span> Your Profile</h1>
                          </div>

                          <div className='flex gap-6 items-center pt-8'>
                              <p className='p-6 bg-gray-700 text-2xl text-gray rounded-full'><IoCameraOutline /></p>
                              <p className='text-lg'>Upload your profile photo</p>
                          </div>

                          <form className='text-sm' action=" ">
                              <div className='flex gap-4 pr-44 py-6'>
                                <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2'  type="text" placeholder='Bright Igwe'/>
                                <input  className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2'type="text" placeholder='Enter username'/>
                              </div>

                              <div className='flex gap-4 pr-44 pb-6'>
                                <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Job Title'/>
                                <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Enter number'/>
                              </div>
                              
                              <div className='pb-6'>
                              <input className='border border-solid border-gray w-3/5 h-10 pt-3 pb-44 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Write about yourself in one or two sentence'/>
                              </div>

                          </form>

                          <button className='px-10 py-3 text-white font-semibold text-md  bg-gradient-to-l from-purple-600 via-blue-700 to-blue-700 rounded-lg font-sans'>Update Profile</button> 
                      
                          </div>) : ''}

                        {Bank===false ? '' : <div className='bg-white'>
                            <h1 className='flex items-center text-blue-700 text-xl font-semibold cursor-pointer'> <span onClick={showBank} className='mr-6'><FaAngleRight/> </span> Bank Details</h1>
                            <form action="">
                            <div className='grid grid-cols-2 gap-10 mt-6'>
                                <div className='grid gap-2' >
                                  <label className='text-lg text-bold' htmlFor="">Bank Name</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg w-full' type="text" placeholder='Enter Bank name' />
                                </div>
                                <div className='grid gap-2 '>
                                  <label className='text-lg text-bold' htmlFor="">Account Number</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg w-full' type="text" placeholder='Enter Account Number' />
                                </div>
                                <div className='grid gap-2 '>
                                  <label className='text-lg text-bold' htmlFor="">Account Name</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg ' type="text" placeholder='Enter Account Name' />
                                </div>

                            </div>

                          </form>

                          <button className='px-10 py-3 mt-6 text-white font-semibold text-md  bg-gradient-to-l from-purple-600 via-blue-700 to-blue-700 rounded-lg font-sans'>Update Profile</button>
                            </div> }  
                  </div> 
                
                </div>                     



{/* ===============================mobile screen ========================================================================================= */}
                
                <div className='relative bg-white'>
                  
                <div  className='md:hidden lg:hidden '>
                      <div className='flex gap-4 border-b border-solid border-gray-2 pb-6'>
                          <Image className='rounded-full h-10 w-10' src={profile} alt='user image'/>
                          <div className=''>
                          <p className='font-semibold text-md'>Bright Igwe</p>
                          <p className='text-slate-600 text-sm font-sans'>topkidz02@gmail.com</p>
                          </div>
                      </div>

                      <div className='py-10 px-5'>
                        <p onClick={showProfile} className={Profile===false ? ('flex items-center gap-6 font-semibold text-blue-800 text-md font-sans pb-6 cursor-pointer') : ('flex items-center gap-6 text-md font-sans pb-6 cursor-pointer')}> <span className='text-2xl'>< CiUser/></span> Your Profile</p>
                        <p onClick={showBank} className={Bank===true ? ('flex items-center gap-6 text-md font-semibold text-blue-800 font-sans cursor-pointer') : ('flex items-center gap-6 text-md font-sans cursor-pointer')} >  <span className='text-2xl'>< CiBank/></span> Bank Details</p>
                       <Link href="./signuppage"><p className='flex items-center gap-6 text-blue-800 cursor-pointer text-md font-bold font-sans mt-44'> <span className='text-2xl'><IoIosLogOut/></span>Log-out</p></Link> 
                      </div>
                </div>
                 
                 <div className='md:hidden lg:hidden bg-white border-l border-solid border-gray-4 px-6 absolute top-0 left-0'>
                      {Profile ===false ? (<div> 

                        <div>
                          <h1 className='flex items-center text-blue-700 text-xl font-semibold '> <span onClick={showProfile} className='mr-6'><FaAngleRight/> </span> Your Profile</h1>
                        </div>

                        <div className='flex gap-6 items-center pt-8'>
                            <p className='p-4 bg-gray-700 text-xl text-gray rounded-full'><IoCameraOutline /></p>
                            <p className='text-md'>Upload your profile photo</p>
                        </div>

                        <form className='text-sm' action=" ">
                            <div className='grid gap-4 py-6'>
                              <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2'  type="text" placeholder='Bright Igwe'/>
                              <input  className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2'type="text" placeholder='Enter username'/>
                            </div>

                            <div className='grid gap-4 pb-6'>
                              <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Job Title'/>
                              <input className='border border-solid border-gray w-full py-3 px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Enter number'/>
                            </div>
                            
                            <div className='pb-6'>
                            <input className='border border-solid border-gray h-10 pt-3 pb-32 w-full px-2 rounded-lg focus:border-blue-800 focus:outline-none  focus:border-2' type="text" placeholder='Write about yourself briefly'/>
                            </div>

                        </form>

                        <button className='px-10 py-3 text-white font-semibold text-md  bg-gradient-to-l from-purple-600 via-blue-700 to-blue-700 rounded-lg font-sans'>Update Profile</button> 
                    
                        </div>) : ''}

                      {Bank===false ? '' : <div className='bg-white' >
                          <h1 className='flex items-center text-blue-700 text-xl font-semibold cursor-pointer'> <span onClick={showBank} className='mr-6'><FaAngleRight/> </span> Bank Details</h1>
                          <form action="">
                            <div className='grid gap-10 mt-6 pb-6'>
                                <div className='grid gap-2' >
                                  <label className='text-lg text-bold' htmlFor="">Bank Name</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg' type="text" placeholder='Enter Bank name' />
                                </div>
                                <div className='grid gap-2 '>
                                  <label className='text-lg text-bold' htmlFor="">Account Number</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg' type="text" placeholder='Enter Account Number' />
                                </div>
                                <div className='grid gap-2 '>
                                  <label className='text-lg text-bold' htmlFor="">Account Name</label>
                                  <input className='border border-solid border-gray px-2 py-2 text-bold rounded-lg' type="text" placeholder='Enter Account Name' />
                                </div>

                            </div>

                          </form>

                          <button className='px-10 py-3 text-white font-semibold text-md  bg-gradient-to-l from-purple-600 via-blue-700 to-blue-700 rounded-lg font-sans'>Update Profile</button>

                          </div> }  
                </div>  
                  
                </div> 



      </section> : ''}

               

    </div>
  )
}

export default NavbarSection
