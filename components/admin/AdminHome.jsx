"use client";
import React, {  useState } from "react";
import SideBarButton from "./SideBarButton";
import { RxDashboard } from "react-icons/rx";
import { TbReportAnalytics } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import Dashboard from "./Dashboard";
import AdminBookings from "./AdminBookings";
import AdminCars from "./AdminCars";
import AdminUsers from "./AdminUsers";
import { FaUpload } from "react-icons/fa6";
import UploadCar from "./UploadCar";


function AdminHome() {
  const [dashboard, setDashboard] = useState("dashboard");
  return (
    <>
   
    <div className="min-h-screen w-full flex">
      <div className="w-1/4">
        <div className="bg-gray-200 md:w-72 h-screen fixed   text-black">
          <div className="w-full border-b border-gray-300 p-1 md:p-5 pb-8">
            <h1 className="border border-gray-300 rounded-3xl text-2xl py-4 text-center hidden md:flex justify-center">
              Admin
            </h1>
          </div>
          <div className=" w-full h-full p-5 flex flex-col gap-5 ">
            <SideBarButton
              title={"Dashboard"}
              icon={<RxDashboard />}
              address={() => setDashboard("dashboard")}
            />
            <SideBarButton
              title={"Bookings"}
              icon={<TbReportAnalytics />}
              address={() => setDashboard("bookings")}
            />
            <SideBarButton
              title={"Cars"}
              icon={<IoCarSportOutline />}
              address={() => setDashboard("cars")}
            />
            <SideBarButton
              title={"Users"}
              icon={<HiOutlineUsers />}
              address={() => setDashboard("users")}
            />
            <SideBarButton
              title={"Upload Car"}
              icon={<FaUpload />}
              address={() => setDashboard("upload")}
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full pt-20 pb-5 px-1">
        {dashboard === "dashboard" && <Dashboard />}
        {dashboard === "bookings" && <AdminBookings />}
        {dashboard === "cars" && <AdminCars />}
        {dashboard === "users" && <AdminUsers />}
        
      </div>
       {dashboard === "upload" && <UploadCar onclick={()=> setDashboard("dashboard")}/>}
    </div>

      

   
     </>
  );
}

export default AdminHome;
