import React from 'react'
import CarCard from './CarCard'

function Cars() {
  return (
    <div className='min-h-screen w-full bg-white '>
        <h1 className='text-black text-4xl text-center py-5 w-1/2 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ipsa?</h1>
        <div className='flex flex-wrap sm:justify-between gap-5 p-10 justify-center'>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        </div>
      
    </div>
  )
}

export default Cars
