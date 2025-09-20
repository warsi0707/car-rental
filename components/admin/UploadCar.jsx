import { RxCross1 } from "react-icons/rx";
import AdminFormInput from "./AdminFormInput";
import { useContext, useState } from "react";
import { StateContext } from "@/context/ContextProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { useSession } from "next-auth/react";


export default function UploadCar({ onclick }) {
  const session = useSession()
  const { loading, setLoading } = useContext(StateContext);
  const ownerId = session?.data?.user?.id

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [modelYear, setModelYear] = useState(0);
  const [pricePerDay, setPricePerDay] = useState(0);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const [properties, setProperties] = useState([]);

  const [imageInput, setImageInput] = useState("");
  const [propInput, setPropInput] = useState("");
  
  

  const handleImage =()=>{
    toast.success("Image added")
    setImages([...images, imageInput])
    setImageInput("")
  }
  const handleProp =()=>{
    setProperties([...properties, propInput])
    setPropInput("")
  }
  const handleRemoveProp =(idx)=>{
    const newProps = properties.filter((item, index)=> index !== idx)
    setProperties(newProps)
  }

  const UploadCar = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post("/api/admin/cars", {name, content, modelYear, brand, pricePerDay, images, properties, ownerId});
      if(response.status === 201){
        setLoading(false)
        toast.success(response.data.message)
        onclick()
      }else{
        toast.error(response.data.error)
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <>
      <div className=" w-screen  fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 py-20">
        <div className="bg-white w-full md:w-[700px]  text-black rounded-2xl p-6">
          <div className="flex justify-end pb-5">
            <button onClick={onclick} className="cursor-pointer text-2xl">
              <RxCross1 />
            </button>
          </div>
          <h1 className="text-3xl text-center">Post Car</h1>

          <div className="space-y-3 w-full">
            <AdminFormInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"Vitara "}
              lable={"Car Name"}
              type={"text"}
            />
            <div className="flex flex-col md:flex-row gap-2 justify-between">
              <AdminFormInput
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder={"Brezza "}
                lable={"Brand"}
                type={"text"}
              />
              <AdminFormInput
                value={modelYear}
                onChange={(e) => setModelYear(e.target.value)}
                placeholder={"2015 "}
                lable={"Model Year"}
                type={"number"}
              />
              <AdminFormInput
                value={pricePerDay}
                onChange={(e) =>
                  setPricePerDay(e.target.value)
                }
                placeholder={"2000"}
                lable={"Price / Day"}
                type={"number"}
              />
            </div>
            {/* ---Image--- */}
            <div >
              <label className='md:text-xl text-gray-500'>Images</label>
              <div className="w-full border-2  rounded-xl bg-slate-100 flex justify-between">
                <input value={imageInput} onChange={(e)=> setImageInput(e.target.value)} type="text" className="w-full p-2 outline-none" />
                <button onClick={handleImage} className="bg-slate-300 p-2 px-5 rounded-r-xl text-xl cursor-pointer border-l-2">+</button>
              </div>
            </div>
             {/* ---PRoprties--- */}
            <div >
              <label className='md:text-xl text-gray-500'>Properties</label>
              <div className="flex items-center gap-2 p-1">
                {properties && properties.map((item,idx)=>(
                  <div key={idx} className="flex items-center bg-green-300 p-1 rounded-md">
                  <p>{item}</p>
                  <button onClick={()=>handleRemoveProp(idx)} className="cursor-pointer "><RxCross2/></button>
                </div>
                ))}
              </div>
              <div className="w-full border-2  rounded-xl bg-slate-100 flex justify-between">
                <input value={propInput} onChange={(e)=> setPropInput(e.target.value)} type="text" className="w-full p-2 outline-none" />
                <button onClick={handleProp} className="bg-slate-300 p-2 px-5 rounded-r-xl text-xl cursor-pointer border-l-2">+</button>
              </div>
            </div>
           
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="Content">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="5"
                cols="5"
                className="border-2 rounded-xl p-2"
                placeholder="Tell us something about the car"
              ></textarea>
            </div>
            <div>  
            <button onClick={UploadCar} className="bg-blue-500 w-full text-xl p-2 rounded-2xl text-white cursor-pointer">{loading? "Loading...": "Post"}</button>
            </div>
          </div>
        </div>
     
    </>
  );
}
