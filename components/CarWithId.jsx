"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import RideBookingCard from "./bookings/RideBookingCard";
import { LiaRupeeSignSolid } from "react-icons/lia";
import LoadingPage from "./LoadingPage";
import toast from "react-hot-toast";
import axios from "axios";


export default function CarWithId() {
  const { id } = useParams();
  const [isBooking, setIsbooking] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const Car = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`/api/car/${id}`)
      
      if (response.data.car) {
        setLoading(false);
        setData(response.data.car);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };
  const handleBookignMenu =()=>{
    setIsbooking(!isBooking)
  }

  useEffect(() => {
    setLoading(true)
    if (id) {
      setLoading(false)
      Car();
    } else {
      return;
    }
  }, [id]);

  if (loading==true && !data) {
    return <LoadingPage />;
  }else{
  return (
    <>
    <div className="w-full min-h-screen p-10  gap-10 justify-between flex flex-col lg:grid grid-cols-5 ">
      <div className="h-full w-full col-span-3 space-y-5">
        <img src={data?.images[0]} alt="" className="rounded-4xl h-96 w-full" />
        <div className="flex flex-col w-full flex-wrap md:flex-nowrap justify-center items-center gap-2 md:flex-row lg:justify-between overflow-hidden">
          {data?.images.slice(1).map((item)=>(
            <img
            key={item}
            src={item}
            className="h-52 w-full lg:w-72 rounded-2xl"
            alt=""
          />
          ))}
        </div>
      </div>
      <div className="h-full w-full lg:px-20 col-span-2 flex gap-5 flex-col  justify-between ">
        <h1 className="text-4xl text-black-100 font-bold ">
          {data?.name}
        </h1>
        <p className="text-gray-100 text-lg border-b pb-10 border-slate-50">{data?.content}</p>
        <div className="grid grid-cols-2 justify-between gap-5 border-b border-slate-50 pb-5 font-semibold text-gray-100">
          {data?.properties.map((item)=>(
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className=" flex text-center items-center gap-2 border-b pb-10 border-slate-50">
          <p className="flex items-center text-4xl text-black-100 font-bold">
            <LiaRupeeSignSolid />
            {data?.pricePerDay.toLocaleString('en-IN')}
          </p>
          <p className="text-xl text-gray-100">/ Per day</p>
        </div>
        <button onClick={()=> handleBookignMenu()} className="bg-orange-100 p-5 px-8 rounded-full cursor-pointer">
          BOOK THE CAR
        </button>
      </div>
    </div>
    {isBooking &&
    <RideBookingCard onClose={()=> handleBookignMenu()} pricePerDay={data?.pricePerDay} id={id}/>
    }
    </>
 
  );}
}


