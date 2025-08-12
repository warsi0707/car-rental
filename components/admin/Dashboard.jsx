import React from 'react'
import DashboardCard from './DashboardCard'

export default function Dashboard() {
  return (
    <div className='bg-gray-200  h-auto rounded-4xl text-black p-5 flex flex-wrap justify-between'>
      <DashboardCard name={"Bookings"} count={100}/>
      <DashboardCard name={"Cars"} count={100}/>
      <DashboardCard name={"Users"} count={100}/>
    </div>
  )
}
  