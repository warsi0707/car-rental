import Link from 'next/link';
import React, { memo } from 'react'
import { RxCross1 } from "react-icons/rx";
import * as motion from "motion/react-client";

function NavMenu({close}) {
  return (
    <motion.div 
 
    className='h-screen w-screen flex justify-end'>
      <div className='bg-white w-1/2 h-full fixed top-0 p-5'>
        <button onClick={close} className="cursor-pointer fixed text-3xl bg-black text-white right-0 mr-5 p-2 rounded-full"><RxCross1/></button>
        <div className='text-black mt-20 text-2xl sm:text-5xl flex flex-col gap-5 font-semibold sm:ml-5'>
          <h1>Rent your car</h1>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Cars</Link>
          <Link href={"/signin"}>Signin</Link>
          <Link href={"/signup"}>Signup</Link>
          <Link href={"/"}>Logout</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default memo(NavMenu)
