import GetCars from "@/lib/GetCars";
import Link from "next/link";
import MainCarCard from "../MainCarCard";

async function Cars() {
  const cars = await GetCars();

  return (
    <div className="min-h-screen w-full bg-white p-10 space-y-10" id="cars">
      <div className="flex justify-between ">
        <p className="text-2xl md:text-4xl font-bold">Our Property</p>
        <Link href={"/cars"} className="px-5 md:px-8 text-lg  text-white bg-orange-100 py-2">See All Cars</Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:flex-wrap md:justify-evenly gap-5  ">
        {cars.map((item) => (
          <MainCarCard
            key={item.id}
            id={item.id}
            name={item.name}
            content={item.content.split(' ').slice(0,10).join(' ')}
            price={item.pricePerDay}
            image={`${item.images[0]}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Cars;
