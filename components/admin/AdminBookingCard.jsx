import * as motion from "motion/react-client";
import { memo } from "react";


function AdminBookingCard({name, brand, username, price,modelYear}) {
  return (
    <motion.div
    initial={{scale:0, opacity:0}}
    whileInView={{scale:1, opacity:1}}
    whileTap={{scale:0.6,}}
    animate={{y:1.5, opacity:1}}
    transition={{
      type:'spring',
      duration:0.9,
    }}
     viewport={{once:true}}
    whileHover={{scale:0.9}}
    className='border border-black md:w-80 max-h-96 rounded-4xl p-2 shadow-2xl '>
        <motion.img
        whileHover={{scale:0.9,}}
        className='h-52 w-full rounded-4xl overflow-hidden' src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='p-5 flex flex-col gap-2'>
            <div>
                <h1 className='text-3xl'>{name}</h1>
                <p className='text-gray-400'>{brand} {modelYear}</p>
            </div>
            <div className=' flex justify-between '>
               <div className='flex gap-2'>
                 <h1>{username}</h1>
                <p>{price}</p>
               </div>
                <p>cancel</p>
            </div>
        </div>
    </motion.div>
  )
}

export default memo( AdminBookingCard);
