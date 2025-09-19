import { memo } from "react";

function BookingInput({ value, onChange, placeholder, type,}) {
  return (
     <input required type={type} value={value} onChange={onChange} className="w-full border-b border-gray-100 p-3 md:p-5 text-sm outline-none" placeholder={placeholder} />
  );
}

export default memo(BookingInput);
