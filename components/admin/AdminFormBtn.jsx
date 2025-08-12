import * as motion from "motion/react-client";
import { memo } from "react";

 function AdminFormBtn({title, onclick}) {
  return (
      <motion.button
      whileHover={{scale:1.1}}
      whileTap={{scale:0.8}}
      transition={{
        type: 'spring',
        duration: 0.2
      }}
      onClick={onclick}
      className="bg-blue-500 w-full text-xl p-2 rounded-2xl text-white cursor-pointer">
        {title}
      </motion.button>

  );
}
export default memo(AdminFormBtn)