import * as motion from "motion/react-client";
import Link from "next/link";
import { memo } from "react";

function NavLink({ link, onclick, title }) {
  return (
    <motion.div
      className="hover:text-blue-600"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
    >
      <Link onClick={onclick} href={`${link}`}>
        {title}
      </Link>
    </motion.div>
  );
}

export default memo(NavLink);
