import React, { memo } from "react";
import { MdCurrencyRupee } from "react-icons/md";

function BookedCard({ name, brand, price, start, end, total, onDelete}) {

  return (
    <div className="w-96 py-5 flex flex-col gap-5 rounded-xl p-3 bg-white text-black">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl">{name}</h1>
          <div className="flex gap-2 text-gray-500">
            <h1>{brand}</h1>
            <h1>{price}</h1>
          </div>
        </div>
        <div>
          <button
            onClick={onDelete}
            className="cursor-pointer hover:underline hover:text-red-700"
          >
            Cancel ride
          </button>
        </div>
      </div>
      <div className="flex justify-between border-b border-dotted  pb-5  ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold">
            {new Date(start).toISOString().split("T")[0]}
          </h1>
          <p className="text-gray-500">Start </p>
        </div>
        <div className="flex flex-col  items-center">
          <h1 className="text-2xl font-semibold">
            {new Date(end).toISOString().split("T")[0]}
          </h1>
          <p className="text-gray-500">End</p>
        </div>
      </div>
      <div className="flex justify-between">
        <h1>Booked At :31-07-2025</h1>
        <div className="flex ">
          <h1 className="mt-1">
            <MdCurrencyRupee />
          </h1>
          <h1>{total}</h1>
        </div>
      </div>
    </div>
  );
}

export default memo(BookedCard);
