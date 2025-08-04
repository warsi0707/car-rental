"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import NavMenu from "./navbars/NavMenu";
import * as motion from "motion/react-client";
import NavLink from "./navbars/NavLink";
import LogoutBtn from "./navbars/LogoutBtn";
import { useSession } from "next-auth/react";

export default  function HomeNavbar() {
  const session = useSession();

  const [openMenu, setOpenMenu] = useState(false);
  const ToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="flex justify-end  ">
        <motion.div
        
          className="bg-black backdrop-blur-3xl fixed top-0 right-0 left-0  p-3 text-white w-96 mx-auto  rounded-full  justify-between px-3 hidden sm:flex mt-5"
        >
          <NavLink link={"/"} title={"Home"} />
          <NavLink link={"#cars"} title={"Cars"} />
          <NavLink link={"#service"} title={"Services"} />
          {session.status === "authenticated" && (
            <>
              {" "}
              <LogoutBtn /> <NavLink link={"/bookings"} title={"Bookings"} />
            </>
          )}
          {session.status === "unauthenticated" && (
            <NavLink link={"/signin"} title={"Signin"} />
          )}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{duration:0.2}}
          whileTap={{scale:0.8}}
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
      <div 
      className="fixed">{openMenu && <NavMenu close={ToggleMenu} />}</div>
    </>
  );
}


