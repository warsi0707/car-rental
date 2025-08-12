'use client'
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SideBarButton({title, icon,address}) {
  return (
    <motion.button
    onClick={address}
   whileHover={{scale:0.9}}
   transition={{duration:0.2}}
   whileTap={{scale:1.1}}
    className={`p-2  md:p-3 md:w-full border border-gray-300  ${title == 'Logout'? 'hover:text-red-500': 'hover:text-sky-400'} rounded-xl flex justify-center sm:gap-3 text-xl cursor-pointer hover:bg-white`}>
      <p className="mt-1">{icon}</p>
      <p className="hidden md:flex">{title}</p>
    </motion.button>
  );
}
