import { RxCross1 } from "react-icons/rx";
import AdminFormInput from "./AdminFormInput";
import AdminFormBtn from "./AdminFormBtn";


export default function UpdateCar({onclick}) {
  return (
      <div className="  fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 py-20">
      <div className="bg-white  w-[500px] text-black rounded-2xl p-6">
        <div className="flex justify-end pb-5">
          <button onClick={onclick} className="cursor-pointer text-2xl">
            <RxCross1 />
          </button>
        </div>
        <h1 className="text-3xl text-center">Update Car</h1>
         
        <div className="space-y-3">
          <AdminFormInput placeholder={"Vitara "} lable={"Car Name"} type={'text'} />
          <div className="flex justify-between">
            <AdminFormInput placeholder={"Brezza "} lable={"Brand"} type={'text'}/>

            <AdminFormInput placeholder={"2015 "} lable={"Model Year"} type={'number'}/>
          </div>
          <div className="flex justify-between">
            <AdminFormInput placeholder={"2000"} lable={"Price / Day"} type={'number'}/>
          </div>
          <AdminFormInput placeholder={"Link..."} lable={"Image Link"}type={'text'} />
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
               <AdminFormBtn title={'Post'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
