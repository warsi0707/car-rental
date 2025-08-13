import * as motion from "motion/react-client";
import { RxCross1 } from "react-icons/rx";
import AdminFormInput from "./AdminFormInput";
import AdminFormBtn from "./AdminFormBtn";
import { useContext, useRef } from "react";
import { StateContext } from "@/context/ContextProvider";
import LoadingPage from "../LoadingPage";



export default function UploadCar({ onclick }) {
  const {loading, setLoading} = useContext(StateContext)
  const nameRef = useRef("")
  const brandRef = useRef("")
  const modelRef = useRef('')
  const priceRef = useRef('')
  const imageRef = useRef("")
  const contentRef = useRef("")


  const UploadCar =async(e)=>{
    e.preventDefault()
    const name = nameRef.current.value;
    const brand = brandRef.current.value;
    const modelYear = modelRef.current.value;
    const pricePerDay = priceRef.current.value;
    const image = imageRef.current.value;
    const content = contentRef.current.value; 

    try{
      const response = await fetch("/api/auth/admin/car",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, brand, modelYear, pricePerDay, image, content})
      })
      const result = await response.json()
      setLoading(true)
      if(response.ok){
        setLoading(false)
        setTimeout(() => {
          onclick(false)
        }, 2000);
        
      }
    }catch(error){
      setLoading(false)
      console.error(error)
    }
  }

  return (
   <>
    {loading && <LoadingPage/>}
  
    <motion.div
    initial={{opacity: 0, }}
    whileInView={{opacity:1}}
    transition={{duration:0.9}}
    
    className="  fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 py-20">
      <div className="bg-white  w-[500px] text-black rounded-2xl p-6">
        <div className="flex justify-end pb-5">
          <button onClick={onclick} className="cursor-pointer text-2xl">
            <RxCross1 />
          </button>
        </div>
    <h1 className="text-3xl text-center">Post Car</h1>
         
        <div className="space-y-3">
          <AdminFormInput ref={nameRef} placeholder={"Vitara "} lable={"Car Name"} type={'text'} />
          <div className="flex justify-between">
            <AdminFormInput ref={brandRef} placeholder={"Brezza "} lable={"Brand"} type={'text'}/>

            <AdminFormInput ref={modelRef} placeholder={"2015 "} lable={"Model Year"} type={'number'}/>
          </div>
          <div className="flex justify-between">
            <AdminFormInput ref={priceRef} placeholder={"2000"} lable={"Price / Day"} type={'number'}/>
          </div>
          <AdminFormInput ref={imageRef} placeholder={"Image Link..."} lable={"Image Link"}/>
          <div className="flex flex-col">
            <label htmlFor="Content">Content</label>
            <textarea
            ref={contentRef}
              rows="5"
              cols="5"
              className="border-2 rounded-xl p-2"
              placeholder="Tell us something about the car"
            ></textarea>
          </div>
          <div>
               <AdminFormBtn title={'Post'} onclick={UploadCar}/>
          </div>
        </div>
      </div>
    </motion.div>
     </>
  );
}
