'use client'

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import heroimg from './image/hero.png'
import { FaAngleRight } from "react-icons/fa6";
import expimg1 from './image/explainer-1.png'
import expimg2 from './image/explainer-2.png'
import expimg3 from './image/explainer-3.png'
import { LiaStarOfLifeSolid } from "react-icons/lia";
import toolsimg from './image/tools.png'
import playerimg from './image/video-player.png'
import readerimg from './image/pdf-reader.png'
import paymentimg from './image/payment.png'
import dashboardimg from './image/dashboard.png'
import undrawimg1 from './image/undraw_dashboar.png'
import undrawimg2 from './image/undraw_online_test.png'
import undrawimg3 from './image/undraw_video_files.png'
import undrawimg4 from './image/undraw_reminders.png'
import undrawimg5 from './image/undraw_booking.png'
import undrawimg6 from './image/undraw_analytics.png'
import personimg from './image/person2.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link'



const HomeSectionone = () => {
  return (
    <div>
      <div className='min-h-screen bg-gradient-to-b from-blue-700 to-violet-500 flex flex-col'>
        {/*<Navbar />*/}
        <nav className='flex  mt-10 bg-white mr-10 ml-10 pt-5 pb-5 align-center text-center rounded-xl'>
          <div className='pl-5 pt-2 text-2xl font-bold ml-5'> 
             <h2>Klas</h2>
          </div>
          <div className='flex ml-64 gap-10 pt-3'>
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

        {/*<Content />*/}
        <main className='flex-grow'>
            <div className='w-auto lg:flex'>
              <div className='pl-10 mt-28'>
                <h2 className='text-6xl font-semibold text-white'>Anyone, anywhere <br /> can teach online</h2>
                <p className='pt-10 text-xl font-medium text-gray-300'>Create & sell your ebooks, courses, and live classes- <br /> all on klas</p>
              <div className='flex gap-5 mt-10'>
                <button className='bg-white text-blue-800 font-semibold text-sm py-4 px-10 rounded-lg'>Sign up free</button>
                <button className='flex gap-2 text-gray-300 font-semibold pt-3'>Request demo<span className='pt-1'><FaAngleRight /></span></button>
              </div>  
              </div>
              <div className='w-2/4 h-auto mt-20 ml-10 mb-5'>
                <Image src={heroimg} alt=''  className='images'/>
              </div>

            </div>
        </main>
            
      </div>

      <div className='min-h-screen bg-white '>
         <div className='flex gap-72 text-center pt-20 justify-center mr-24 '>
            <div className='   '>
              <h2 className='ml-5 text-4xl font-semibold'>125,000+</h2>
              <p className='ml-5 text-xl pt-4 text-neutral-900'>Students globally</p>
            </div>

            <div className=' '>
              <h2 className='mr-4 text-4xl font-semibold'>2,200+</h2>
              <p className='ml-5 text-xl pt-4 text-neutral-900'>Online academics</p>
              
            </div>

            <div className=' '>
              <h2 className='mr-24 text-4xl font-semibold'>27</h2>
              <p className='ml-5 text-xl pt-4 text-neutral-900'>Countries reached</p>
            </div>
         </div>

         <div>
           <div className='justify-center text-center pt-28'>
             <h2 className='text-5xl font-semibold pb-5'>Three ways to teach</h2>
             <p className='text-2xl text-neutral-500'>The ultimate solution to help you launch your online academy</p>
           </div>

          <div className='flex gap-5'>
            <div className='w-1/3 h-auto mt-20 ml-14 mb-5 bg-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-95'>
             <Image src={expimg1} alt=''  className='images'/>
             <h4 className='text-2xl font-medium py-5 px-5'>Live  classes</h4>
             <p className='text-lg pl-5 pb-10 text-neutral-900'> Our immersive  class venue  gives you the <br />
               power  to share  your knowledge.</p>
            </div>

            <div className='w-1/3 h-auto mt-20 ml-0 mb-5 bg-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-95'>
             <Image src={expimg2} alt=''  className='images'/>
             <h4 className='text-2xl font-medium py-5 px-5'>Online courses</h4>
             <p className='text-lg pl-5 pb-10 text-neutral-900'>Run your knowledge business with online<br /> courses for Students</p>
            </div>
    
            <div className='w-1/3 h-auto mt-20 mr-14 mb-5 bg-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-95'>
             <Image src={expimg3} alt=''  className='images'/>
             <h4 className='text-2xl font-medium py-5 px-5'>Ebook</h4>
             <p className='text-lg font- pl-5 pb-10 text-neutral-900'>Reach your students in faster ways. Sell unlimited PDFs & files on klas</p>
            </div>
          </div>
         </div>

         <div className='pt-24 justify-center text-center '>
          <h2 className='text-5xl font-semibold'>With you from first student to full scale</h2>
         </div>

         <div className='flex gap-20'>
           <div className='pt-44 ml-14'>
            <h2 className='text-4xl font-semibold pb-5'>Host immersive classes</h2>
            <p className='flex gap-2 text-xl text-neutral-900 pb-4'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Engage in new ways with polls, emojis, Q+A</p>
            <p className='flex gap-2 text-xl text-neutral-900 pb-4'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>One-click recordings & cloud storage</p>
            <p className='flex gap-2 text-xl text-neutral-900'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Host up to 100 students per class</p>
           </div>

           <div className='w-2/4 h-auto mt-20 ml-10 mb-5'>
             <Image src={toolsimg} alt=''  className='images'/>
           </div>
         </div>

         <div className='flex gap-20'>
           <div className='w-2/4 h-auto mt-20 ml-10 mb-5'>
             <Image src={playerimg} alt=''  className='images'/>
           </div>

           <div className='pt-44 ml-14'>
            <h2 className='text-4xl font-semibold pb-5'>Offer online courses</h2>
            <p className='flex gap-2 text-xl text-neutral-900 pb-4'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Interactive course player</p>
            <p className='flex gap-2 text-xl text-neutral-900 pb-4'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Unlimited students per course</p>
            <p className='flex gap-2 text-xl text-neutral-900'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Upload multiple lessons</p>
           </div>
         </div>

         <div className='flex gap-20 pb-20'>
           <div className='pt-44 ml-14'>
            <h2 className='text-4xl font-semibold pb-5'>Sell beautiful ebooks</h2>
            <p className='flex gap-2 text-xl text-neutral-900 pb-4'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Intuitive ebook reader</p>
            <p className='flex gap-2 text-xl text-neutral-900 pb-4'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Unlimited students per ebook</p>
            <p className='flex gap-2 text-xl text-neutral-900'><span className='pt-1 text-blue-900'><LiaStarOfLifeSolid /></span>Upload ebooks of any size in PDF format</p>
           </div>

           <div className='w-2/4 h-auto mt-20 ml-10 mb-5'>
             <Image src={readerimg} alt=''  className='images'/>
           </div>
         </div>

      </div>

      <div className='min-h-screen bg-gradient-to-b from-blue-700 to-violet-500 flex flex-col'>
        <div className='flex gap-20 pt-20'>
           <div className='w-2/4 h-auto mt-20 ml-10 mb-5'>
             <Image src={paymentimg} alt=''  className='images'/>
           </div>

           <div className='pt-44 ml-14'>
            <h2 className='text-4xl font-semibold pb-5 text-white'>Offer online courses</h2>
            <p className='flex gap-2 text-xl text-white pb-4'><span className='pt-1 text-white'><LiaStarOfLifeSolid /></span>Interactive course player</p>
            <p className='flex gap-2 text-xl text-white pb-4'><span className='pt-1 text-white'><LiaStarOfLifeSolid /></span>Unlimited students per course</p>
            <p className='flex gap-2 text-xl text-white'><span className='pt-1 text-white'><LiaStarOfLifeSolid /></span>Upload multiple lessons</p>
           </div>
         </div>

         <div className='flex gap-20 pt-20 pb-20'>
           <div className='pt-44 ml-14'>
            <h2 className='text-4xl font-semibold pb-5 text-white'>Offer online courses</h2>
            <p className='flex gap-2 text-xl text-white pb-4'><span className='pt-1 text-white'><LiaStarOfLifeSolid /></span>Interactive course player</p>
            <p className='flex gap-2 text-xl text-white pb-4'><span className='pt-1 text-white'><LiaStarOfLifeSolid /></span>Unlimited students per course</p>
            <p className='flex gap-2 text-xl text-white'><span className='pt-1 text-white'><LiaStarOfLifeSolid /></span>Upload multiple lessons</p>
           </div>

           <div className='w-2/4 h-auto mt-20 ml-10 mb-5'>
             <Image src={dashboardimg} alt=''  className='images'/>
           </div>
        </div>
      </div>

      <div className='min-h-screen bg-white'>
        <div className='pt-32 justify-center text-center'>
          <h2 className='text-5xl font-semibold'>Add  many more features</h2>
        </div>

        <div className='flex gap-5 align-center'>
          <div className='w-2/4 h-auto mt-20 ml-14  bg-gray-100 px-8 py-10 rounded-lg'>
            <div className='w-4/4 pb-10'>
              <Image src={undrawimg1} alt=''  className=' images'/>
            </div>
            <h4 className='text-lg font-medium'>Students dashboards</h4>
            <p className='text-sm text-gray-500'>A central learning  hub  for your  students track <br /> upcoming  classes, quizzes.</p>
          </div>

          <div className='w-2/4 h-auto mt-20  bg-gray-100 px-10 py-10 rounded-lg'>
            <div className='w-3/4 pb-5 ml-8'>
              <Image src={undrawimg2} alt=''  className=' images'/>
            </div>
            <h4 className='text-lg font-medium'>Engaging Quizzes</h4>
            <p className='text-sm text-gray-500'>Creating  engaging  quizzes for students, enjoy <br /> automated marking.</p>
          </div>

          <div className='w-2/4 h-auto mt-20 mr-14 bg-gray-100 px-8 py-10 rounded-lg'>
            <div className='w-3/4 pb-14 ml-5'>
              <Image src={undrawimg3} alt=''  className=' images'/>
            </div>
            <h4 className='text-lg font-medium'>Resources library</h4>
            <p className='text-sm text-gray-500'>Upload supplimentary materials such as videos,<br /> docs, presentation</p>
          </div>
        </div>

        <div className='flex gap-5 align-center'>
          <div className='w-2/4 h-auto mt-5 ml-14 mb-5 bg-gray-100 px-8 py-10 rounded-lg'>
            <div className='w-3/4 pb-14 ml-8'>
              <Image src={undrawimg4} alt=''  className=' images'/>
            </div>
            <h4 className='text-lg font-medium'>Students dashboards</h4>
            <p className='text-sm text-gray-500'>A central learning  hub  for your  students track <br /> upcoming  classes, quizzes.</p>
          </div>

          <div className='w-2/4 h-auto mt-5  mb-5 bg-gray-100 px-10 py-10 rounded-lg'>
            <div className='w-3/4 pb-14 ml-10'>
              <Image src={undrawimg5} alt=''  className=' images'/>
            </div>
            <h4 className='text-lg font-medium'>Engaging Quizzes</h4>
            <p className='text-sm text-gray-500'>Creating  engaging  quizzes for students, enjoy <br /> automated marking.</p>
          </div>

          <div className='w-2/4 h-auto mt-5 mr-14 mb-5 bg-gray-100 px-8 py-10 rounded-lg'>
            <div className='w-2/4 pb-14 ml-10'>
              <Image src={undrawimg6} alt=''  className=' images'/>
            </div>
            <h4 className='text-lg font-medium'>Resources library</h4>
            <p className='text-sm text-gray-500'>Upload supplimentary materials such as videos,<br /> docs, presentation</p>
          </div>
        </div>
      </div>

      <div className='min-h-screen bg-white'>
        <div className='justify-center text-center mt-32 mb-20'>
          <h2 className='text-5xl font-semibold'>Don't just take our for it...</h2>
        </div>
        
        <div className='justify-center text-center bg-indigo-100 px-10 py-28 ml-32 mr-32 rounded-lg'>
           <div className='pb-14'>
             <p className='text-2xl'>“Working with Klas has been one of the spotlights of the year for<br />
              Codenovation. The platform is easy to use, seamless, and has excellent<br />
               customer service. Thanks for making it easy to teach online.”</p>
           </div>

           <div className='flex gap-4 justify-center items-center'>
              <div className='w-[50px]'>
                <Image src={personimg} alt=''  className=' images'/>
              </div>

              <div>
                <h4 className='font-semibold text-lg'>Shola Akinrolie</h4>
                <p className='text-gray-600'>Founder, Codenovation</p>
              </div>
           </div>
        </div>

        <div className='justify-center text-center bg-gradient-to-b from-blue-700 to-violet-500 px-10 py-28 ml-32 mr-32 mt-32 rounded-lg'>
           <h2 className='text-white text-5xl font-semibold pb-5'>Ready to start teaching?</h2>
           <p className='text-gray-300 text-2xl pb-10'>Use klas to create and manage your online academy</p>
           <button className='bg-white px-12 py-4 font-semibold rounded-lg'>Sign up free</button>
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

export default HomeSectionone