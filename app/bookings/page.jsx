import BookedCard from "@/components/bookings/BookedCard";
import GetBookings from "@/lib/GetBookings";

export default async function Bookings() {
  const data = await GetBookings()
  return (
    <div className="min-h-screen w-full flex flex-wrap py-10 gap-10 justify-evenly items-center">
      {data.bookings.map((item)=> (
          <BookedCard key={item.id} id={item.car.id} name={item.car.name} model={item.car.modelYear} price={item.car.pricePerDay} start={item.startDate} end={item.endDate} total={item.totalCost} brand={item.car.brand}/>
      ))}
    </div>
  )
}
