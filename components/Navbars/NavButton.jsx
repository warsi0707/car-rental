import * as motion from "motion/react-client";
import Link from "next/link";

function NavButton({onclick, title}) {
  return (
    <motion.button 
     onClick={onclick}
      className="hover:text-blue-600 cursor-pointer"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      {title}
    </motion.button>
  )
}

export default NavButton
