import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import Link from 'next/link';
import * as motion from "motion/react-client";

export default function Welcome() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='w-full h-96 bg-white mx-auto flex justify-center items-center -mt-20 '>
      <div className='flex flex-col justify-center items-center gap-5'>
        <p className='text-xl'>WELCOME</p>
        <p className='lg:w-[650px] text-center text-xl lg:text-4xl '>We Are Redefining  Premium Car Rentals  With Affordable price And Reliable Rides</p>
      </div>
    </motion.div>
    <div className='flex p-5 gap-10 flex-col justify-center w-full items-center lg:flex-row pb-20 bg-white'>
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='w-full lg:w-1/2 h-96 relative overflow-hidden'>
        <img src="/uploads/car2.png" className='w-full h-96 rounded-4xl object-cover transition-transform duration-500 group-hover:scale-110' alt="" />
        <div className=' w-full h-full absolute p-5 top-20 left-5 lg:left-10
         text-white space-y-5'>
          <p className='text-3xl lg:text-6xl font-bold'>15% Off</p>
          <p className='text-xl lg:w-80'>ON AIRPORT PICKUPS ALL OVER INDIA</p>
          <Link href={""} className='flex items-center gap-2 text-lg hover:underline w-32'><p>Learn More</p><BsArrowUpRight/></Link>
        </div>
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='w-full lg:w-1/2 h-96 relative'>
        <img src="/uploads/car3.png" className='w-full h-96 rounded-4xl ' alt="" />
        <div className=' w-full h-full absolute p-5 top-20 left-5 lg:left-10
         text-white space-y-5'>
          <p className='text-3xl lg:text-6xl font-bold'>100+</p>
          <p className='text-xl lg:w-80'>AWESOME COLLECTION OF LUXURY CARS</p>
          <Link href={""} className='flex items-center gap-2 text-lg hover:underline w-32'><p>Learn More</p><BsArrowUpRight/></Link>
        </div>
      </motion.div>
    </div>
    </>
  )
}
