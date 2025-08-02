import Link from "next/link";
import React, { memo } from "react";
import * as motion from "motion/react-client";
import { LiaRupeeSignSolid } from "react-icons/lia";

function CarCard({ id, name, content, price,image }) {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 100, top: 0}}
      whileHover={{ scale: 0.9 ,top: 100}}
      whileTap={{ scale: 0.8 }}
      
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="bg-black pb-10 w-96 rounded-xl p-3"
    >
      <Link href={`/cars/${id}`}>
        <img
          className="h-72 rounded-md w-full"
          src={image}
          alt=""
        />
        <div className="text-white h-full flex flex-col py-5 ">
          <div className="flex justify-between">
            <h1 className="text-lg text-red-600">{name}</h1>
            <div className="flex gap-">
              <p className="mt-1.5">
                <LiaRupeeSignSolid />
              </p>
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
