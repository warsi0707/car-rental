import { RxCross1 } from "react-icons/rx";
import AdminFormInput from "./AdminFormInput";
import AdminFormBtn from "./AdminFormBtn";
import { useRef } from "react";



export default function UploadCar({ onclick }) {
  const nameRef = useRef("")
  const brandRef = useRef("")
  const modelRef = useRef("")
  const priceRef = useRef(0)
  const imageRef = useRef("")
  const contentRef = useRef("")

  const UploadCar =async(e)=>{
    e.preventDefault()
    const name = nameRef.current.value;
    const brand = brandRef.current.value;
    const modelYear = modelRef.current.value;
    const pricePerDay = priceRef.current.value;
    const content = contentRef.current.value; 
    const image = imageRef.current.value
    try{
      const response = await fetch("/api/auth/admin/car",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, brand, modelYear, pricePerDay, content, image})
      })
      const result = await response.json()
      console.log(result)
    }catch(error){
      console.error(error)
    }
  }
  return (
    <div className="  fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 py-20">
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
          <AdminFormInput ref={imageRef} placeholder={"Link..."} lable={"Image Link"}type={'text'} />
          <div className="flex flex-col">
            <label htmlFor="Content">Content</label>
            <textarea
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
    </div>
  );
}
