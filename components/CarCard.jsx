import Link from "next/link";
import React, { memo } from "react";
import * as motion from "motion/react-client"
import { LiaRupeeSignSolid } from "react-icons/lia";

function CarCard({id, name, content, price}) {
  return (
    <motion.div
    whileHover={{scale:0.9, }}
    whileTap={{scale:0.8, }}
    initial={{opacity:0, scale:0.5, y:100}}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    animate={{opacity:1, scale:1}}
    transition={{
      duration:0.5,

    }}
     className="bg-black pb-10 w-96 rounded-xl p-3">
      <Link href={`/cars/${id}`}>
        <img
          className="h-72 rounded-md w-full"
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="text-white h-full flex flex-col py-5 ">
          <div className="flex justify-between">
            <h1 className="text-lg text-red-600">{name}</h1>
            <div className="flex gap-">
              <p className="mt-1.5"><LiaRupeeSignSolid/></p>
              <h1 className="text-lg text-red-600">{price} / Day</h1>
            </div>
          </div>
          <p>{content}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default memo(CarCard);
