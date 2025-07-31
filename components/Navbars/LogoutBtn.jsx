'use client'
import React, { memo } from "react";
import { signOut } from "next-auth/react"


function LogoutBtn() {
  return (
    <div>
        <button className="cursor-pointer" onClick={signOut}>Logout</button>
    </div>
      

  );
}

export default memo(LogoutBtn);
