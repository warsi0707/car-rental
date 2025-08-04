"use client";
import { memo, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import BookingInput from "./BookingInput";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingPage from "../LoadingPage";

function RideBookingCard({ close, id, pricePerDay }) {
  const session = useSession();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false)
  const router = useRouter();
 


  const Booking = async (e) => {
    e.preventDefault();
    
    if (session.status === "unauthenticated") {
      return ;
    }
    const userid = parseInt(session.data.user.id);
    const userId = parseInt(userid)
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/booking/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ startDate, endDate, userId }),
      });
      setLoading(true)
      const result = await res.json();
      if (res.ok) {
         setLoading(false)
        toast.success(result.message);
        router.push("/bookings");
        close();
      } else {
        setLoading(false)
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const last = new Date(endDate);
      const totalDay = (last - start) / (1000 * 60 * 60 * 24);
      if (totalDay) {
        setTotalPrice(totalDay * pricePerDay);
      } else {
        setTotalPrice(0);
      }
    }
  }, [startDate, endDate, totalPrice]);

  if(loading){
    return <LoadingPage/>
  }
  return (
    <div className="pb-10 space-y-5 sm:w-[350px] bg-white rounded-2xl text-black p-2">
      <div className="flex justify-end text-2xl p-2">
        <button
          onClick={close}
          className="bg-black text-white p-1 rounded-full cursor-pointer"
        >
          <RxCross2 />
        </button>
      </div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-center text-3xl">Book Your Ride</h1>
        <p>adf adfasdf asdf</p>
      </div>
      <div className="px-5 space-y-8">
        <BookingInput
          value={startDate}
          onchange={(e) => setStartDate(e.target.value)}
        />
        <BookingInput
          value={endDate}
          onchange={(e) => setEndDate(e.target.value)}
        />
        <div>
          <h1 className="text-xl">Total Fare: {totalPrice}</h1>
        </div>
        <button
          onClick={Booking}
          className="bg-indigo-600 w-full p-1 sm:p-3 text-2xl rounded-full hover:bg-indigo-500 cursor-pointer transition-all duration-300"
        >
          Take A Ride
        </button>
      </div>
    </div>
  );
}

export default memo(RideBookingCard);
