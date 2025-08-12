import { useContext, useEffect, useState } from "react";
import AdminBookingCard from "./AdminBookingCard";
import LoadingPage from "../LoadingPage";
import { StateContext } from "@/context/ContextProvider";

function AdminBookings() {
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(StateContext);

  const GetBookings = async () => {
    const response = await fetch("/api/auth/admin/user-bookings");
    const result = await response.json();
    setLoading(true);
    if (response.ok == true) {
      setData(result.bookings);
      setLoading(false);
    }
    console.log(result.bookings);
  };

  useEffect(() => {
    GetBookings();
  }, []);
  
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="bg-gray-200  min-h-screen rounded-3xl text-black p-8 flex flex-wrap gap-5 justify-center">
      {data.map((item) => (
        <AdminBookingCard
          key={item.id}
          name={item.car.name}
          brand={item.car.brand}
          username={item.user.name}
          price={item.totalCost}
          modelYear={item.car.modelYear}
        />
      ))}
    </div>
  );
}

export default AdminBookings;
