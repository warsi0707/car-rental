import React, { memo } from "react";
import * as motion from "motion/react-client";

function LoadingPage() {
  return (
    <div className="min-h-screen w-full bg-white/30 backdrop-blur-sm back fixed top-0 flex gap-20 flex-col pb-20 justify-center items-center text-6xl font-bold text-black ">
      <motion.p
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="h-20 w-20 bg-white rounded-xl"
      ></motion.p>
      <h1 className=" ">Loading...</h1>
    </div>
  );
}

export default memo(LoadingPage);
