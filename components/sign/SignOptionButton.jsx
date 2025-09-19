import { memo } from "react";

function SignOptionButton({onclick, title, icon }) {
  return (
    <button onClick={onclick} className=" text-5xl  flex gap-2 justify-center cursor-pointer">{icon}</button>
  );
}

export default memo(SignOptionButton);
