"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import NavMenu from "./NavMenu";
import * as motion from "motion/react-client";
import NavLink from "./NavLink";
import LogoutBtn from "./LogoutBtn";
import { useSession } from "next-auth/react";

function Navbars() {
  const session = useSession()

  const [openMenu, setOpenMenu] = useState(false);
  const ToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="flex justify-end ">
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: 1, scale: 1.4 }}
          transition={{
            duration: 0.1,
          }}
          translate={{}}
          className="bg-black backdrop-blur-3xl   p-3 text-white min-w-96 mx-auto  rounded-full  justify-between px-3 hidden sm:flex mt-5"
        >
          <NavLink link={"/"} title={"Home"} />
          <NavLink link={"#cars"} title={"Cars"} />
          <NavLink link={"#service"} title={"Services"} />
          {session.status === 'authenticated' && <> <LogoutBtn/> <NavLink link={"/bookings"} title={"Bookings"} /></>}
          {session.status === 'unauthenticated' && <NavLink link={"/signin"} title={"Signin"} />}
          
         
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.5 }}
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
      {/* <div className="sticky top-0">
        {signUp && <Sginup close={ToggleSignUp} />}
      </div>
      <div className="sticky top-0">
        {signin && <Signin close={ToggleSignIN} />}
      </div> */}
    </>
  );
}

export default Navbars;
