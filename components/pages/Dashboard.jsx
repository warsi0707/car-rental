import React from 'react'
import StarterPage from './StarterPage'
import Cars from './Cars'
import Services from './Services'
import Welcome from './Welcome'

export default function Dashboard() {
  return (
    <div>
       <StarterPage />
       <Welcome/>
      <Cars />
      <Services />
    </div>
  )
}
