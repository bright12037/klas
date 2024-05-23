'use client'
import React from 'react'
import Image from 'next/image';
import Image1 from './images/download.png'
import Image2 from './images/download2.png'
import Image3 from './images/download3.png'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';


const Createsection1 = () => {
  return (
    <div>
      <div>
        <Link href="./dashboard"><p className=' flex gap-1 items-center text-blue-600  px-10 py-10 cursor-pointer'><IoIosArrowBack />Back</p></Link> 
        <div className='flex flex-col justify-center items-center'> 
        <h1 className='text-4xl py-8 text-black font-bold'>What kind of content is it?</h1>
      <h7 className=' text-slate-400 mb-10'>Choose the type of content you would like to create</h7>
        </div>
           <div className=' flex justify-center text-center  gap-8 my-10 mx-32'>
                <div className='grid justify-center w-2/4 h-2/4 shadow-md border-2 border-zinc-300 bg-white rounded-lg px-4 py-6'>
                    <div className='bg-blue-800 flex justify-center items-center rounded-full p-2 mb-4'><Image src={Image1} alt='' width={60}/></div>
                    <h3 className='text-black mb-2'>Recorded courses</h3>
                    <p className='text-slate-400 mb-8 '>Upload and sell your courses</p>
                    <button className='bg-white hover:bg-blue-700 hover:text-white text-blue-600 py-2 px-10  text-bold rounded-lg border-2 border-blue-600'>Start</button>
                </div> 

                <div className='grid justify-center w-2/4 shadow-md border-2 border-zinc-300  bg-white rounded-lg px-4 py-6'>
                    <div className='bg-blue-800 flex justify-center rounded-full p-2 mb-4'><Image src={Image2} alt='' width={60}/></div>
                    <h3 className='text-black mb-2'>Ebooks</h3>
                    <p className='text-slate-400 mb-8  '>Sell interactive ebooks  </p>
                    <button className='bg-white hover:bg-blue-700 hover:text-white  text-blue-600  py-2 px-10   text-bold rounded-lg border-2 border-blue-600 '>Start</button>
                </div>  


                <div className='grid justify-center w-2/4 shadow-md border-2 border-zinc-300  bg-white rounded-lg px-4 py-6'>
                    <div className=' bg-blue-800 flex justify-center rounded-full p-2 mb-4'><Image src={Image3} alt='' width={60}/></div>
                    <h3 className='text-black mb-2 '> Live classes</h3>
                    <p className='text-slate-400 mb-8 '>Host immersive & fun classes</p>
                    <button className='bg-white  hover:bg-blue-700 hover:text-white text-blue-600  py-2 px-10  text-bold rounded-lg border-2 border-blue-600 '>Start</button>
                </div>

           </div>
           
      </div>
        
      

    </div>
  )
}

export default Createsection1