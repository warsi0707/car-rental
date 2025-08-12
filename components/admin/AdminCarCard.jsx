'use client'
import * as motion from "motion/react-client";
import AdminCarCardBtn from "./AdminCarCardBtn";
import { memo, useState } from "react";
import UploadCar from "./UploadCar";
import UpdateCar from "./UpdateCar";


 function AdminCarCard({name, brand, content, image}) {
  const [open, setOpen] = useState(false)
  return (
    <>
    <motion.div
    initial={{scale:0, opacity:0}}
    whileInView={{scale:1, opacity:1}}
    whileHover={{rotate:'1deg'}}
    transition={{
      duration: 0.8
    }}
    viewport={{once:true}}

    className='bg-slate-100 w-full h-80 rounded-3xl flex p-2'>
        <div className='h-full w-1/2 flex flex-col justify-center items-start md:px-10 gap-1'>
            <p className='bg-slate-200 md:w-36 px-2 text-center rounded-full py-1 text-gray-600'>{brand}</p>
            <h1 className='text-xl m:dtext-4xl font-bold'>{name}</h1>
            <p className='text-slate-500 hidden md:flex'>{content}</p>
            <div className='flex flex-col md:flex-row md:gap-10 gap-2 mt-5'>
               <AdminCarCardBtn type={'update'} title={"Update"} onclick={()=> setOpen(!open)}/>
               <AdminCarCardBtn type={'delete'} title={"Delete"}/>
            </div>
        </div>
        <div className=' h-full w-1/2 '>
        <img className='h-full w-full rounded-3xl' src={`${image}`} alt="" />
        </div>
      
    </motion.div>
    {open &&  <UpdateCar onclick={()=> setOpen(!open)} type={'update'}/>}
     
    
    </>
  )
}
export default memo(AdminCarCard)