'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import './Company.css'
import Link from 'next/link'

import img1 from './images/d1.svg'
import img2 from './images/d2.svg'
import img3 from './images/d3.svg'
import img4 from './images/c1.svg'
import img5 from './images/c2.svg'
import img6 from './images/c3.svg'
import img7 from './images/c4.svg'
import img8 from './images/disrupt.svg'
import img9 from './images/edtech.svg'
import img10 from './images/nairametrics.svg'
import img11 from './images/techcabal.svg'

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

const CompanyTop = () => {
    const[Hover1, setHover1] = useState(false)
    const[Hover2, setHover2] = useState(false)
    const[Hover3, setHover3] = useState(false)
    const[Hover4, setHover4] = useState(false)
    const[Hover5, setHover5] = useState(false)
    const[Hover6, setHover6] = useState(false)


    const showHover1 = () => {
        setHover1(true)
    }
    const notshowHover1 = () => {
        setHover1(false)
    }

    const showHover2 = () => {
        setHover2(true)
    }
    const notshowHover2 = () => {
        setHover2(false)
    }
    
    const showHover3 = () => {
        setHover3(true)
    }
    const notshowHover3 = () => {
        setHover3(false)
    }
    
    const showHover4 = () => {
        setHover4(true)
    }
    const notshowHover4 = () => {
        setHover4(false)
    }
    
    const showHover5 = () => {
        setHover5(true)
    }
    const notshowHover5 = () => {
        setHover5(false)
    }
    
    const showHover6 = () => {
        setHover6(true)
    }
    const notshowHover6 = () => {
        setHover6(false)
    }


  return (
    <div className='font-sans mx-16'>
        {/*<Navbar />*/}
        <nav className='flex bg-white mt-10 pt-5 pb-5 mb-16 align-center text-center rounded-xl shadow-md'>
          <div className='pl-5 pt-2 text-2xl font-bold ml-5'> 
             <h2>Klas</h2>
          </div>
          <div className='flex ml-auto gap-10 pt-3'>
             <p className='hover:text-blue-700 hover:cursor-pointer'>Home</p>
             <Link href="./pricing"><p className='hover:text-blue-700 hover:cursor-pointer'>Pricing</p></Link>
             <Link href="./companypage"><p className='hover:text-blue-700 hover:cursor-pointer'>Company</p></Link> 
             <p className='hover:text-blue-700 hover:cursor-pointer'>Case Studies</p>
             <Link href="./blog"><p className='hover:text-blue-700 hover:cursor-pointer'>Blog</p></Link> 
          </div>
          <div className='flex items-center gap-3 ml-auto pr-10 '>
            <Link href="./signuppage"> <button className='text-blue-600 font-semibold mr-3'>Login</button></Link>
            <Link href="./signinpage"> <button className='bg-blue-600 text-white py-3 px-5 rounded-lg'>Sign up free</button></Link>
          </div>
        </nav>

        <div className='text-center'>
            <h1 className='text-6xl font-semibold pb-10'> Empowering everyone to teach online</h1>
            <p className='text-2xl text-gray-500 font-semibold px-2'>Launched in 2022, Klas is on a mission to empower everyone to teach engaging online <br /> classes.</p>
        </div>

        <div className='flex items-center gap-3 justify-center mt-32'>
            <Image className='h-full w-full ' src={img1} alt='s' />
            <Image className='h-full w-full ' src={img2} alt='s' />
            <Image className='h-full w-full ' src={img3} alt='s' />
        </div>

        <div className='flex items-center justify-center gap-20 my-24'>
            <div className='text-center'>
                <p className='font-bold pb-3 text-3xl'>2022</p>
                <p>Launched</p>
            </div>

            <div className='text-center'>
                <p className='font-bold pb-3 text-3xl'>85,000+</p>
                <p>Learners worldwide</p>
            </div>

            <div className='text-center'>
                <p className='font-bold pb-3 text-3xl'>1,200+</p>
                <p>Active online schools</p>
            </div>

            <div className='text-center'>
                <p className='font-bold pb-3 text-3xl'>27</p>
                <p>Countries reached</p>
            </div>
        </div>

        <div>
            <p className='text-5xl mx-44 font-semibold pb-10 text-center pb-20'>We look forward to a future where learning is even more</p>

            <div className='flex items-center gap-3 justify-center'>
                <div>
                    <Image src={img4} alt='s' />
                    <p className='text-2xl font-semibold pt-6'>Fun</p>
                </div>

                <div>
                <Image src={img5} alt='s' />
                <p className='text-2xl font-semibold pt-6'>Collaborative</p>
                </div>

                <div>
                <Image src={img6} alt='s' />
                <p className='text-2xl font-semibold pt-6'>Borderless</p>
                </div>

                <div>
                <Image src={img7} alt='s' />
                <p className='text-2xl font-semibold pt-6'>Communtiy Driven</p>
                </div>
            </div>
        </div>

        <div>
            <h1 className='text-5xl mx-44 font-semibold text-center pt-32'>Frequentl Asked Questions</h1>

            <div class="mybox">
                <div onMouseEnter={showHover1} onMouseLeave={notshowHover1} className='relative border-solid border-gray-500 border-b py-4'>
                    <p className='flex items-center text-lg font-semibold'>Who can use Klas? <span className='ml-auto'>{Hover1===false ? (<FaAngleDown/>) : (<FaAngleUp/>)}</span></p>
                    {Hover1===false ? '' : (<p className='text-gray-600 text-md font-semibold py-2 px-6'> Everyone can use Klas. Including creators, online schools,communities, and even brands.</p>)}
                </div>

                <div onMouseEnter={showHover2} onMouseLeave={notshowHover2}  className='relative border-solid border-gray-500 border-b py-4'>
                    <p className='flex items-center text-lg font-semibold'>What if I want to host a paid class? <span className='ml-auto'>{Hover2===false ? (<FaAngleDown/>) : (<FaAngleUp/>)}</span></p>
                    {Hover2===false ? '' :(<p className='text-gray-600 text-md font-semibold py-2 px-6'> Currently, you can only host a paid class in 2
                    currencies: USD and NGN. We will be supporting more currencies in 2023.</p>)}
                </div>

                <div  onMouseEnter={showHover3} onMouseLeave={notshowHover3}  className='relative border-solid border-gray-500 border-b py-4'>
                    <p className='flex items-center text-lg font-semibold'>How much does it cost to use Klas?<span className='ml-auto'>{Hover3===false ? (<FaAngleDown/>) : (<FaAngleUp/>)}</span></p>
                    {Hover3===false ? '' :(<p className='text-gray-600 text-md font-semibold py-2 px-6'> Its completely free to use. You can opt for our
                    paid plans: Klas Pro or Klas Enterprise. Check out our pricing page.</p>)}
                </div>

                <div  onMouseEnter={showHover4} onMouseLeave={notshowHover4}  className='relative border-solid border-gray-500 border-b py-4'>
                    <p className='flex items-center text-lg font-semibold'>How is Klas different from Zoom and Gmeet? <span className='ml-auto'>{Hover4===false ? (<FaAngleDown/>) : (<FaAngleUp/>)}</span></p>
                    {Hover4===false ? '' : (<p className='text-gray-600 text-md font-semibold py-2 px-6'> Zoom and Gmeet are video conferencing tools, 
                   but Klas is more than just a virtual classroom tech. You can accept payments fromstudents globally, 
                   manage your classes, offer online tests, and connect your favourite tools from our integration store. 
                   Klas takes a more all-in-one approach to online teaching,
                    while still remaining simple and intuitive for everyone.</p>)}
                </div>

                <div  onMouseEnter={showHover5} onMouseLeave={notshowHover5}  className='relative border-solid border-gray-500 border-b py-4'>
                    <p className='flex items-center text-lg font-semibold'>How is Klas different from Udemy or Skillshare? <span className='ml-auto'>{Hover5===false ? (<FaAngleDown/>) : (<FaAngleUp/>)}</span></p>
                    {Hover5===false ? '' : (<p className='text-gray-600 text-md font-semibold py-2 px-6'> Udemy and Skillshare are marketplaces focused
                     on pre-recorded courses. Klas is a shopify-like platform that lets you create, monetize, and host engaging
                      live classes.</p>)}
                </div>

                <div  onMouseEnter={showHover6} onMouseLeave={notshowHover6}  className=' py-4'>
                    <p className='flex items-center text-lg font-semibold'>Can I record my classes?<span className='ml-auto'>{Hover6===false ? (<FaAngleDown/>) : (<FaAngleUp/>)}</span></p>
                    {Hover6===false ? '' : (<p className='text-gray-600 text-md font-semibold py-2 px-6'>Yes you can record your classes on Klas. Once your 
                   class ends, you can then either download the class recording immediately or if the file is too big,
                    you can auto-upload the class recording to YouTube.</p>)}
                </div>
            </div>
        </div>

        <div>
            <h1 className='text-5xl mx-44 font-semibold text-center py-24'>As featured in</h1>

            <div className='flex items-center gap-12 justify-center'>
                <Image src={img8} />
                <Image src={img9} />
                <Image src={img10} />
                <Image src={img11} />
            </div>
        </div>

             {/*<footer />*/}
      <div className='bg-blue-700 mt-20'>
        <div className='flex pt-10'>
          <div className='ml-24'>
           <h2 className='text-2xl font-semibold text-white'>Klas</h2>
          </div>

          <div className='flex gap-8 items-center align-center ml-auto mr-28'>
            < RiInstagramFill className='text-2xl text-white'/>
            < FaTwitter className='text-2xl text-white'/>
            < SiLinkedin className='text-xl text-white'/>
          </div>
        </div>

        <div className='flex gap-5 text-center justify-center align-center pt-20'>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Home</p>
           <Link href="./pricing"> <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Pricing</p></Link>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Company</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Case Studies</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Products</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Terms of Use</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Privacy Policy</p>
        </div>

        <div className='flex gap-1 text-center justify-center align-center pt-10 pb-10'>
          <p className='text-gray-300 text-xs pt-1'><FaRegCopyright  /></p>
          <p className='text-sm text-gray-300 '> Klas Global, Inc.</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyTop
