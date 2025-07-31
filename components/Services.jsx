import React from "react";

function Services() {
  return (
    <div
      className="h-screen w-screen bg-white flex flex-col sm:flex-row "
      id="service"
    >
      <div className=" h-screen w-full sm:w-1/2  flex flex-col justify-center items-start sm:pb-10 px-10 sm:px-20 gap-4 text-black">
        <h1 className="bg-black px-5 sm:px-10 sm:py-1 rounded-full text-white">
          OUR SERVICES
        </h1>
        <h1 className="text-2xl sm:text-4xl font-semibold t">
          Lorem ipsum dolor sit amet.
        </h1>
        <h1 className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
          asperiores ipsam exercitationem. Mollitia nesciunt laborum recusandae
          ex nobis blanditiis vero!
        </h1>
      </div>
      <div className=" h-screen w-full sm:w-1/2 px-10 p-5 flex justify-center items-center relative">
        <img
          className="w-full h-96 rounded-xl bg-transparent brightness-50 contrast-50"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className="absolute text-white text-4xl textbol">
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
    </div>
  );
}

export default Services;
