import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200  w-screen flex text-black ">
      <div className="w-1/2 flex flex-col sm:flex-row gap-5 justify-between mx-auto py-20">
        <div>
          <h1 className="text-3xl ">Rent a car</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold ">Quick links</h1>
          <h1>Quick links</h1>
          <h1>Quick links</h1>
          <h1>Quick links</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">services</h1>
          <h1>services</h1>
          <h1>services</h1>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
