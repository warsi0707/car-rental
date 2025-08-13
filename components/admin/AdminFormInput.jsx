import React from 'react'

function AdminFormInput({placeholder, lable,type, ref}) {
  return (
    <div className='flex flex-col gap-1'>
      <label className='md:text-xl text-gray-500'>{lable}</label>
      <input ref={ref} type={type} placeholder={placeholder} className='border-2 p-1 md:p-2 rounded-xl bg-slate-100' />
    </div>
  )
}

export default AdminFormInput
