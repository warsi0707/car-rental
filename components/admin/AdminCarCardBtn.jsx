import * as motion from "motion/react-client";
import { memo } from "react";

function AdminCarCardBtn({type, title, onclick}) {
  return (
     <motion.button
     whileHover={{scale:1.2, }}
     whileTap={{scale:0.8, }}
     transition={{
        duration:0.4,
        type:'spring'
     }}
     onClick={onclick}
     className={`${type === 'update' && `bg-yellow-400`} ${type === 'delete' && `bg-red-500`}  md:px-8 px-2 md:py-2 text-xl rounded-full cursor-pointer shadow-2xl`}>{title}</motion.button>
  )
}

export default memo( AdminCarCardBtn)
