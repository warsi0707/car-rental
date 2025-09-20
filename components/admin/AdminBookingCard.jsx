import { memo } from "react";


function AdminBookingCard({name, brand, username, price,modelYear, image}) {
  return (
    <div className='border border-black md:w-80 max-h-96 rounded-4xl p-2 shadow-2xl '>
      <img className='h-52 w-full rounded-4xl overflow-hidden' src={image} alt="" />
        <div className='p-5 flex flex-col gap-2'>
            <div>
              <h1 className='text-3xl'>{name}</h1>
              <p className='text-gray-400'>{brand} {modelYear}</p>
            </div>
            <div className=' flex justify-between '>
               <div className='flex gap-2'>
                 <h1>{username}</h1>
                <p>{price}</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default memo( AdminBookingCard);
