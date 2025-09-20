"use client";
import { memo, useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import BookingInput from "./BookingInput";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { StateContext } from "@/context/ContextProvider";
import axios from "axios";

function RideBookingCard({ onClose, id, pricePerDay }) {
  const session = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    peopleCount: 1,
    message: '',
    startDate: '',
    endDate: '',  
    totalPrice: 0
  });

  const {loading, setLoading} = useContext(StateContext)
  const router = useRouter();
 


  const handleBooking = async (e) => {
    e.preventDefault();

    setLoading(true)
    if(formData.startDate && formData.endDate < new Date){
      toast.error("Previous date not allowed")
    }
    const userId = session?.data?.user?.id;
    
    try {
      const response = await axios.post(`/api/booking/${id}`, { ...formData, userId, carId: id })
      console.log(response)
      if (response.statusText === "OK") {
         setLoading(false)
        toast.success(response.data.message);
        router.push("/bookings");
        onClose();
      } else {
        setLoading(false)
        toast.error(response.data.error);
      }
    } catch (error) {
      setLoading(false)
      toast.error(error.response.data.error);
    }
  };
  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const last = new Date(formData.endDate);
      const totalDay = (last - start) / (1000 * 60 * 60 * 24);
      if (totalDay) {
        setFormData({...formData, totalPrice: totalDay * pricePerDay});
      } else {
        setFormData({...formData, totalPrice: 0});
      }
    }
  }, [formData.startDate, formData.endDate, formData.totalPrice]);

  
  return (
    <div className="h-screen  w-screen fixed top-0 bg-white z-50">
          <div className="flex justify-end pr-4">
            <button onClick={onClose} className="bg-orange-100 text-3xl p-5 cursor-pointer font-bold "><RxCross2/></button>
          </div>
          <div className="p-10  lg:px-32 flex flex-col justify-between h-full pb-32">
            <div className="space-y-2 lg:space-y-10">
              <div className="flex flex-col md:flex-row gap-2 lg:gap-5">
                <BookingInput  value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})} placeholder={'Name'} type={'text'}/>
                <BookingInput value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})} placeholder={'Email'} type={'Email'}/>
              </div>
              <div className="flex flex-col md:flex-row gap-2 lg:gap-5">
                <BookingInput value={formData.phone} onChange={(e)=> setFormData({...formData, phone: e.target.value})} placeholder={'Phone'} type={'Number'}/>
                <BookingInput value={formData.address} onChange={(e)=> setFormData({...formData, address: e.target.value})} placeholder={'Address'} type={'text'}/>
                <select id="peoples" value={formData.peopleCount} onChange={(e)=> setFormData({...formData, peopleCount: e.target.value})} name=""  placeholder={"No of people"} className="w-full border-b outline-none p-3" >
                  <option value={0} className="bg-black text-white">No of people</option>
                  <option value={1} className="bg-black text-white">1</option>
                  <option value={2} className="bg-black text-white">2</option>
                  <option value={3} className="bg-black text-white">3</option>
                  <option value={4} className="bg-black text-white">4</option>
                  <option value={4} className="bg-black text-white">5</option>
                  <option value={4} className="bg-black text-white">6</option>
                  <option value={4} className="bg-black text-white">7</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row gap-2 lg:gap-5">
                <div className="w-full">
                  <label htmlFor="">Start Date</label>
                  <input value={formData.startDate} onChange={(e)=> setFormData({...formData, startDate: e.target.value})} type="date" className="w-full border-b p-5 text-sm outline-none " placeholder="start" />
                </div>
                <div className="w-full">
                  <label htmlFor="">End Date</label>
                  <input value={formData.endDate} onChange={(e)=> setFormData({...formData, endDate: e.target.value})} type="date" className="w-full border-b outline-none p-5 text-sm" placeholder="start" />
                </div>
              </div>
              <div>
                 <BookingInput value={formData.message} onChange={(e)=> setFormData({...formData, message: e.target.value})} placeholder={'Your message'} type={'text'}/>
              </div>
              <div className="py-2 lg:py-5">
                <p className="text-2xl lg:text-4xl">Total Fare: {formData.totalPrice.toLocaleString('en-IN')}</p>
              </div>
            </div>
            <div className="w-full border-t py-1 lg:py-3">
              <button onClick={handleBooking} className="border p-3 lg:p-5 w-full rounded-full cursor-pointer hover:bg-orange-100 hover:text-white transition-all duration-300">{loading ? "Booking wait..." : "BOOK NOW"}</button>
            </div>
          </div>
        </div>
  );
}

export default memo(RideBookingCard);
