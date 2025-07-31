'use client'
import RideBookingCard from '@/components/bookings/RideBookingCard'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";


function page() {
  const {id} = useParams()
  const [openCard, setOpenCard] = useState(false)
  const [data, setData] = useState({})
  
 

  const Car =async()=>{
    const res = await fetch(`http://localhost:3000/api/car/${id}`,{
      method: 'GET'
    })
    const result = await res.json()
    console.log(result)
    if(res.ok){
      setData(result.car)
    }
  }


  useEffect(()=>{
    Car()
  },[])
  return (
    <div className='min-h-screen w-screen  py-10'>
      <div className='h-screen w-full  p-10 '>
        <img className='h-96 w-full sm:w-1/2 mx-auto rounded-2xl' src='https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <div className='flex justify-between mt-5 w-full sm:w-1/2 mx-auto h-full px-7 sm:px-0 pt-7'>
          <div className=' fle flex-col space-y-5'>
            <h1 className='text-3xl'>{data.name}</h1>
            <div>
              <h1>Brand: {data.brand}</h1>
              <h1>Model Year: {data.modelYear}</h1>
            </div>
            <h1 >{data.content}</h1>
            <button onClick={()=> setOpenCard(!openCard)} className='bg-red-400 sm:text-3xl py-2 px-5 sm:px-14 rounded-full cursor-pointer hover:bg-red-700 transition-all duration-300'>Book Your Car</button>
          </div>
          <div className='flex'>
            <h1 className='mt-1'><LiaRupeeSignSolid/></h1>
             <h1>{data.pricePerDay} /Day</h1>
          </div>
         
        </div>
      </div>
      {openCard && 
      <div className='absolute bottom-5 right-0'>
        <RideBookingCard  close={()=> setOpenCard(!openCard)} id={data.id} pricePerDay={data.pricePerDay}/>
      </div>
      }
      
      
    </div>
  )
}

export default page
