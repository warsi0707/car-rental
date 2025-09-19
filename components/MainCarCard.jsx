import Link from "next/link";
import React, { memo } from "react";
import * as motion from "motion/react-client";
import { LiaRupeeSignSolid } from "react-icons/lia";

function MainCarCard({ id, name, content, price, image }) {
  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0.5, y: 100 }}
      // whileHover={{ scale: 0.9 }}
      // whileTap={{ scale: 0.8 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{
      //   duration: 0.5,
      // }}
      className=" pb-10 w-96  "
    >
      <Link href={`/cars/${id}`}>
        <img className="h-96  w-full" src={image} alt="" />
        <div className="flex flex-col gap-2 pt-2 text-center items-center">
          <h1 className="text-3xl text-black-100">{name}</h1>
          <p className="text-gray-100">{content}</p>
          <p className="hover:bg-orange-100 text-orange-100 hover:text-white p-1 px-3 transition-all duration-300">VIEW MORE</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default memo(MainCarCard);
