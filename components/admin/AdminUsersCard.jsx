import * as motion from "motion/react-client";
import { memo } from "react";
import { FaTrash } from "react-icons/fa";


function AdminUsersCard({name, email,role, id,onclick}) {
  
  return (
    <motion.div
     initial={{scaleX:0.1, opacity:0}}
    whileInView={{scaleX:1, opacity:1}}
    transition={{duration:0.8}}
   
    className="border p-4 rounded-3xl bg-white flex justify-between shadow-2xl">
        <div className="flex w-1/2 justify-evenly">
        <h1>UserId: {id}</h1>
          <h1>{name}</h1>
          <h1>{email}</h1>
          <h1>{role}</h1>
        </div>
        <motion.button
        whileHover={{scale:1.6}}
        whileTap={{scale:0.9}}
         transition={{
          type:'spring',
          duration:0.8
        }}
        className='text-2xl cursor-pointer hover:text-red-500' onClick={onclick}><FaTrash/></motion.button>
      </motion.div>
  )
}

export default memo( AdminUsersCard);
