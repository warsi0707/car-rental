"use client";
import React, { memo } from "react";
import { RxCross1 } from "react-icons/rx";
import * as motion from "motion/react-client";
import { useSession } from "next-auth/react";
import NavMenuButton from "./NavMenuButton";
import LogoutBtn from "../LogoutBtn";


function NavMenu({ close }) {
  const session = useSession();
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="h-screen w-screen flex justify-end z-50 "
    >
      <div className="bg-white w-1/2 h-screen fixed top-0 p-5 z-50">
        <motion.button
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={close}
          className="cursor-pointer fixed text-3xl bg-black text-white right-0 mr-5 p-2 rounded-full"
        >
          <RxCross1 />
        </motion.button>
        <div className="text-black mt-20 text-2xl sm:text-5xl flex flex-col items-start gap-8 font-semibold sm:ml-5 pt-14">
          <h1>Rent your car</h1>
          <NavMenuButton link={"/"} title={"Home"} />
          <NavMenuButton link={"#cars"} title={"Cars"} />
          <NavMenuButton link={"#service"} title={"Services"} />
          {session.status === "authenticated" && (
            <>
              <NavMenuButton link={"/bookings"} title={"Bookings"} />
              <LogoutBtn />
            </>
          )}
          {session.status === "unauthenticated" && (
            <>
              <NavMenuButton link={"/signin"} title={"Signin"} />
              <NavMenuButton link={"/signup"} title={"Signup"} />
            </>
          )}
          {session.data?.user?.role === "admin" && (
            <>
              <NavMenuButton link={"/admin/dashboard"} title={"Admin"} />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default memo(NavMenu);
