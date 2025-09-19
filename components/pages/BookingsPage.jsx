import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react'

import BookedCard from '../bookings/BookedCard';
import LoadingPage from '../LoadingPage';
import toast from 'react-hot-toast';


export default  function BookingsPage() {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);
      const session = useSession();
  


  const GetBookings = async () => {
    try {
     const response = await fetch(`/api/auth/booking`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          userId: JSON.stringify(session?.data?.user?.id)
        } 
      })
      const result = await response.json();
      setLoading(true)
      if(result?.bookings.length > 0){
        setLoading(false)
        setData(result.bookings);
      }else{
        setLoading(false)
        setData([]);
      }
    } catch (error) {
      setLoading(false)
    
    }
  };
  const CancelRide =useCallback( async (id) => {
    try {
      const userId = session.data.user.id;
      const res = await fetch(`/api/auth/booking/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      const result = await res.json();
      setLoading(true);
      if (res.ok ==true) {
        setLoading(false);
        GetBookings()
        toast.success(result.message);
        // router.push("/bookings");
      } else {
        setLoading(false);
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(error);
    }
  },[])

  useEffect(() => {
    if(!session?.data?.user?.id) return;
    GetBookings()
  }, [session]);
  if( loading){
    return (
      <div>
        <LoadingPage/>
      </div>
    )
  }
  return (
     <div className="min-h-screen w-full flex flex-wrap py-10 gap-10 justify-evenly items-center">
          {data.length == 0  && (
            <h1 className="text-5xl font-bold">LoadingNo Bookings Available</h1>
          )}
           {data && data.map((item) => (
            <BookedCard
              key={item.id}
              name={item.car.name}
              model={item.car.modelYear}
              price={item.car.pricePerDay}
              start={item.startDate}
              end={item.endDate}
              total={item.totalCost}
              brand={item.car.brand}
              onDelete={()=>CancelRide(item.id)}
            />
          ))} 
          
        </div>
  )
}
