'use client'
import BookedCard from "@/components/bookings/BookedCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default  function Bookings() {
  const [data, setData] = useState([])
  const session = useSession()
  const GetBookings =async()=>{
  
    try{
      const res = await fetch("http://localhost:3000/api/auth/booking",{
        method: 'GET',
        headers: {
          'userId': session.data.user.id
        }
      })
      const result = await res.json()
      if(res.ok){
        setData(result.bookings)
      }
    }catch(error){
      toast.error(error)
    }
  }

  useEffect(()=>{
    if(session.status =='authenticated'){
       GetBookings()
    }
   
  },[])
  return (
    <div className="min-h-screen w-full flex flex-wrap py-10 gap-10 justify-evenly items-center">
      {data.map((item) => (
        <BookedCard
          key={item.id}
          id={item.id}
          name={item.car.name}
          model={item.car.modelYear}
          price={item.car.pricePerDay}
          start={item.startDate}
          end={item.endDate}
          total={item.totalCost}
          brand={item.car.brand}
        />
      ))}
      {data.length == 0 && (
        <h1 className="text-5xl font-bold">No Bookings Available</h1>
      )}
    </div>
  );
}
