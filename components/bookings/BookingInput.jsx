import React, { memo } from "react";

function BookingInput({ value, onchange }) {
  return (
    <div className="flex flex-col gap-3">
      <label>Start Date</label>
      <input
        value={value}
        onChange={onchange}
        className="border w-full p-3 rounded-xl"
        type="date"
        placeholder="date"
      />
    </div>
  );
}

export default memo(BookingInput);
