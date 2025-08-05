"use client";
import React, { memo } from "react";
import { signOut } from "next-auth/react";
import * as motion from "motion/react-client";

function LogoutBtn() {
  return (
      <motion.button
   className="hover:text-red-600 cursor-pointer sm:ml-5"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.3 }}
      onClick={signOut}>
        Logout
      </motion.button>

  );
}

export default memo(LogoutBtn);
