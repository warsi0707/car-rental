import Link from 'next/link'
import React from 'react'

function CarCard() {
  return (
    <div className='bg-black pb-10 w-96 rounded-xl p-3'>
        <Link href={"/"}>
        <img className='h-72 rounded-md w-full' src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='text-white h-full flex flex-col py-5'>
            <h1>Heading</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, veniam.</p>
        </div>
        </Link>
        
      
    </div>
  )
}

export default CarCard
