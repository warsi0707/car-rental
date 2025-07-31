import React, { memo } from "react";

function SignFormInput({refs, label, placeholder, type}) {
  return (
    <div className="flex flex-col gap-2 w-80">
      <label className="text-sm font-thin">{label}</label>
      <input
      ref={refs}
        className="p-2 rounded-3xl bg-slate-200 text-black px-4"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default memo(SignFormInput);
