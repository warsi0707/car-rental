"use client";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useSession } from "next-auth/react";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { FaCarOn } from "react-icons/fa6";


export default function HomeNavbar() {
  const session = useSession();
  const [openMenu, setOpenMenu] = useState(false);
  const [isActiveNav, setIsActiveNav] = useState("");
  const [isScroll, setIsScroll] = useState(false)

  const ToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(()=>{
    const handleScroll = window.addEventListener('scroll',()=>{
      if(window.scrollY >=50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  // 360
  // EPIC no: NTV3962164
  const navItem = [
    { id: "about", name: "About" },
    { id: "service", name: "Service" },
    { id: "contact", name: "Contact" },
    { id: "pricing", name: "Pricing" },
  ];

  return (
    <>
      <div className={`${isScroll === true? "bg-white text-black sticky top-0 z-50 shadow-md": "bg-transparent "} w-full p-7 text-xl  flex justify-between items-center border-b border-gray-700`}>
        <Link href={"/"} className="flex gap-2"><FaCarOn/> <p>Care Rent</p></Link>
        <div className="hidden lg:flex gap-5 items-center">
          {navItem &&
            navItem.map((item) => (
              <Link
                href={`/${item.id}`}
                key={item.id}
                className={` cursor-pointer `}
              >
                {item.name}
              </Link>
            ))}
        </div>
          {openMenu && (
            <button onClick={ToggleMenu} className="bg-black text-white p-4 text-2xl rounded-full cursor-pointer">
              <RxCross1 />
            </button>
          )}
          {!openMenu && (
            <button onClick={ToggleMenu} className="bg-black text-white p-4 text-2xl rounded-full cursor-pointer">
              <FaBars />
            </button>
          )}
        </div>
     

      {/* <div className="flex justify-end  w-full">
        <motion.div className="bg-black backdrop-blur-3xl fixed top-0 right-0 left-0 z-50 p-3 text-white w-96 mx-auto  rounded-full  justify-between px-3 hidden sm:flex mt-5">
          <NavLink link={"/"} title={"Home"} />
          <NavLink link={"#cars"} title={"Cars"} />
          <NavLink link={"#service"} title={"Services"} />
          {session.status === "authenticated" && (
            <>
              <LogoutBtn /> <NavLink link={"/bookings"} title={"Bookings"} />
            </>
          )}
          {session?.data?.user?.role === "admin" && (
            <NavLink link={"/admin/dashboard"} title={"Admin"} />
          )}
          {session.status === "unauthenticated" && (
            <NavLink link={"/signin"} title={"Signin"} />
          )}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.8 }}
          className="fixed top-4 right-5 py-3 mt-1  text-xl bg-black px-4 rounded-full "
        >
          {openMenu && (
            <button onClick={ToggleMenu} className="cursor-pointer">
              <RxCross1 />
            </button>
          )}
          {!openMenu && (
            <button onClick={ToggleMenu} className="cursor-pointer">
              <FaBars />
            </button>
          )}
        </motion.div>
      </div>
      <div className="fixed">{openMenu && <NavMenu close={ToggleMenu} />}</div> */}
      <div className="fixed top-0">{openMenu && <NavMenu close={ToggleMenu} />}</div>
    </>
  );
}
