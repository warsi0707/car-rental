import React from "react";

function Services() {
  return (
    <div
      className="min-h-screen lg:h-96 w-full bg-white flex flex-col sm:flex-row "
      id="service"
    >
      <div className=" w-full sm:w-1/2 px-10 p-5 flex justify-center items-center relative">
        <img
          className="w-full h-96 rounded-xl object-cover "
          src="/uploads/car4.png"
          alt=""
        />
        
      </div>
      <div className=" w-full sm:w-1/2  flex flex-col justify-center items-start sm:pb-10 px-10 sm:px-20 gap-4 text-black">
        <h1 className="bg-black px-5 sm:px-10 sm:py-1 rounded-full text-white">
          ABAOUT
        </h1>
        <h1 className="text-2xl sm:text-4xl font-semibold ">
          Driving Convenience, Comfort and Confidence
        </h1>
        <h1 className="">
          We’re your trusted travel partner. Whether you’re exploring a new city, heading out on a business trip, or planning a weekend getaway, autodune provide a wide range of well maintained vehicles to suit every journey.we aim to make every ride smooth, safe, and stress-free.
        </h1>
      </div>
      
    </div>
  );
}

export default Services;
