"use client";
import AdminFormInput from "./AdminFormInput";
import AdminFormBtn from "./AdminFormBtn";
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { StateContext } from "@/context/ContextProvider";
import LoadingPage from "../LoadingPage";

export default function UpdateCar() {
  const {loading, setLoading} = useContext(StateContext)
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter()

  const GetCar =useCallback(async () => {
    try {
      const response = await fetch(`/api/auth/admin/car/${id}`, {
        method: "GET",
      });
      const result = await response.json();
      setLoading(true)
      if (response.ok ==true) {
        setLoading(false)
        setName(result.car.name);
        setBrand(result.car.brand);
        setModelYear(result.car.modelYear);
        setPricePerDay(result.car.pricePerDay);
        setImage(result.car.image);
        setContent(result.car.content)
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  },[])

  const UpdateCar = async(e)=>{
    e.preventDefault()
    try{
      const response = await fetch(`/api/auth/admin/car/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, brand, modelYear, pricePerDay, image, content})
       
      })
      const result = await response.json()
       setLoading(true)
      if(response.ok == true){
         setLoading(false)
        router.push("/admin/dashboard")
      }
      console.log(result)
    }catch(error){
      console.error(error)
    }
  }
  useEffect(() => {
    GetCar();
  }, [id]);

  if(loading){
    return (
      <LoadingPage/>
    )
  }
  return (
    <div className="flex  p-10 pt-20 gap-5">
      <div className="bg-white  w-full text-black rounded-2xl p-6">
        <h1 className="md:text-3xl text-center">Update Car</h1>

        <div className="space-y-3">
          <div className="flex flex-col gap-1">
             <label className='sm:text-xl text-gray-500'>Car Name</label>
              <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Car name" className='border-2 p-1 md:p-2 rounded-xl bg-slate-100' />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-2">
            <div className="flex flex-col gap-1 w-full">
             <label className='md:text-xl text-gray-500'>Brand </label>
              <input value={brand} onChange={(e)=> setBrand(e.target.value)} placeholder="Ford" type="text" className='border-2 p-1 md:p-2 rounded-xl bg-slate-100' />
          </div>
          <div className="flex flex-col gap-1 w-full">
             <label className='sm:text-xl text-gray-500'>Model Year</label>
              <input value={modelYear} onChange={(e)=> setModelYear(e.target.value)} placeholder="2014" type="number" className='border-2 p-1 md:p-2 rounded-xl bg-slate-100' />
          </div>
          </div>
          <div className="flex flex-col gap-1">
             <label className='md:text-xl text-gray-500'>Price Per Day</label>
              <input value={pricePerDay} onChange={(e)=> setPricePerDay(e.target.value)} placeholder="2000" type="number" className='border-2 p-1 md:p-2 rounded-xl bg-slate-100' />
          </div>
          <div className="flex flex-col gap-1">
             <label className='md:text-xl text-gray-500'>Image Link</label>
              <input value={image} onChange={(e)=> setImage(e.target.value)} placeholder="Image..." className='border-2 p-1 md:p-2 rounded-xl bg-slate-100' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Content">Content</label>
            <textarea
              rows="5"
              cols="5"
              className="border-2 rounded-xl p-2 bg-slate-100"
              placeholder="Tell us something about the car"
              value={content} onChange={(e)=> setContent(e.target.value)}
            ></textarea>
          </div>
          <div>
            <AdminFormBtn title={"Post"} onclick={UpdateCar} />
          </div>
        </div>
      </div>
      <div className=" w-full h-screen hidden md:flex">
       <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full rounded-2xl"  alt="" />
       
      </div>
    </div>
  );
}
