'use client'
import { useRouter } from 'next/navigation'
import * as motion from "motion/react-client";


export default function NavMenuButton({link, title}) {
    const router = useRouter()
  return (    
        <motion.button
        initial={{x:20}}
        whileHover={{scale:1.2, x:0}}
        whileTap={{scale:0.8, rotate:3}}
            className="cursor-pointer hover:text-indigo-800" onClick={()=> router.push(`${link}`)}> {title}
        </motion.button>
  )
}
