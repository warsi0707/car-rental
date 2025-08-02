import { memo } from "react";

function SignOptionButton({onclick, title, icon }) {
  return (
    <button onClick={onclick} className="w-full p-2  rounded-full border border-black flex gap-2 justify-center cursor-pointer">
      <p className="text-xl">{icon}</p>
      <h1>{title}</h1>
    </button>
  );
}

export default memo(SignOptionButton);
