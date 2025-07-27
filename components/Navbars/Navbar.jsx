'use client'
import Link from "next/link"
import { useCallback, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import NavMenu from "./NavMenu";




function Navbars() {
  const [openMenu, setOpenMenu] = useState(false)

  const ToggleMenu =()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <>
    <div className="flex justify-end ">
      <div className="bg-black backdrop-blur-3xl sticky top-5 p-3 text-white min-w-[500px] mx-auto  rounded-full  justify-between px-3 hidden sm:flex mt-5">
        <Link href={""}>Home</Link>
        <Link href={""}>Cars</Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Home</Link>
        <Link href={""}>Home</Link>
      </div>
      <div className="fixed top-4 right-5 py-3 mt-1  text-xl bg-black px-4 rounded-full ">
        {openMenu &&   <button onClick={ToggleMenu} className="cursor-pointer"><RxCross1/></button>}
        {!openMenu &&   <button onClick={ToggleMenu} className="cursor-pointer"><FaBars/></button>}
      </div>
    </div>
    <div className="fixed">
       {openMenu && <NavMenu close={ToggleMenu}/>}
    </div>
   
    
    </>
    
    
  )
}

export default Navbars
