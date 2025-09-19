import Link from 'next/link'
import React, { memo } from 'react'

function CarsCard({name, image, price, id}) {
  return (
    <div className="flex flex-col gap-5 justify-between py-10 pb-5 h-full w-[500px] border-slate-50 border rounded-3xl shadow-md">
        <h1 className='text-center text-2xl text-black-100 font-bold '>{name}</h1>
        <img className="h-[450px] w-full" src={`${image}`} alt="" />
        <div className="flex justify-between items-center text-center px-5">
          <p>{price} /per day</p>
          <Link href={`/cars/${id}`} className='bg-blue-50 p-3 px-8 rounded-full border border-slate-50 hover:bg-orange-100 transition-all duration-300'>RENT IT</Link>
        </div>
    </div>
  )
}

export default memo(CarsCard)
