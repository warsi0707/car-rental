import { useContext, useEffect, useState } from "react";
import AdminBookingCard from "./AdminBookingCard";
import { StateContext } from "@/context/ContextProvider";
import toast from "react-hot-toast";

export default function AdminBookings() {
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(StateContext);

  const GetBookings = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/user-bookings");
      const result = await response.json();
      if (response.ok == true) {
        setData(result.bookings);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false)
      toast.error(error);
    }
  };

  useEffect(() => {
    GetBookings();
  }, []);

  if (loading && loading) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center mt-32">Loading...</h1>
      </div>
    )
  }
  return (
    <div className=" min-h-screen rounded-3xl text-black p-8 flex flex-wrap gap-5 justify-center">
      {data.map((item) => (
        <AdminBookingCard
          key={item.id}
          name={item.car.name}
          brand={item.car.brand}
          username={item.user.name}
          price={item.totalCost}
          modelYear={item.car.modelYear}
          image = {item.car.images[0]}
        />
      ))}
    </div>
  );
}


