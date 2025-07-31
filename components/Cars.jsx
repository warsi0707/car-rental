import React from "react";
import CarCard from "./CarCard";
import GetCars from "@/lib/GetCars";

async function Cars() {
  const result = await GetCars();
  return (
    <div className="min-h-screen w-full bg-white " id="cars">
      <h1 className="text-black text-4xl text-center py-5 w-1/2 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ipsa?
      </h1>
      <div className="flex flex-wrap sm:justify-between gap-5 p-10 justify-center">
        {result.cars.map((item) => (
          <CarCard
            key={item.id}
            id={item.id}
            name={item.name}
            content={item.content}
            price={item.pricePerDay}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Cars;
