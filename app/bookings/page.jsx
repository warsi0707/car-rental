"use client";
import BookedCard from "@/components/bookings/BookedCard";
import LoadingPage from "@/components/LoadingPage";
import { StateContext } from "@/context/ContextProvider";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Bookings() {
  const [data, setData] = useState([]);
  const {loading, setLoading} = useContext(StateContext);
  const session = useSession();


  const GetBookings = async () => {
    try {
      const response = await fetch(`/api/auth/booking`, {
        method: "GET",
        headers: {
          userId: JSON.stringify(session.data.user.id),
        },
      });
      const result = await response.json();
      setLoading(true);
      if (response.ok) {
        setData(result.bookings);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (session.status === "authenticated" && session.data.user.id) {
      setLoading(false);
      GetBookings();
    } else {
      return;
    }
  }, [session]);
  if (loading) {
    return <LoadingPage />;
  }
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
