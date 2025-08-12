'use client'
import AdminCarCard from './AdminCarCard'
import { useCallback, useContext, useEffect, useState } from 'react'
import  { StateContext } from '@/context/ContextProvider'
import LoadingPage from '../LoadingPage'

export default function AdminCars() {
  const [data, setData] = useState([])
  const {loading, setLoading} = useContext(StateContext)
  const GetAllCars =useCallback( async()=>{
    try{
      const response = await fetch("/api/auth/admin/car")
      const result = await response.json()
      setLoading(true)
      if(response.ok ==  true){
        setLoading(false)
        setData(result.cars)
      }else{
        setData([])
      }
      console.log(result)
    }catch(error){
      setLoading(false)
      console.error(error)
    }
  },[])
  useEffect(()=>{
    GetAllCars()
  },[])
  if(loading ){
    return <LoadingPage/>
  }
  return (
    <div className='bg-gray-200  min-h-screen rounded-3xl text-black p-5 flex flex-col gap-5'>
      {data?.map((item)=> (
        <AdminCarCard key={item.id} name={item.name} brand={item.brand} content={item.content} image={item.image}/>
      ))}

    </div>
  )
}

