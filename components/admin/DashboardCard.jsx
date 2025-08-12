import React from 'react'

function DashboardCard({name, count}) {
  return (
    <div className='bg-white w-72 rounded-2xl h-72 flex justify-center items-center text-6xl pb-10 flex-col'>
        <h1>{name}</h1>
        <h1 className='text-slate-400 text-5xl'>{count}</h1>
      </div>
  )
}

export default DashboardCard
