import React from 'react'

function AdminFormInput({placeholder, lable,type, value, onChange}) {
  return (
    <div className='flex w-full flex-col gap-1'>
      <label className='md:text-xl text-gray-500'>{lable}</label>
      <input value={value} onChange={onChange} type={type} placeholder={placeholder} className='border-2 p-1 md:p-2 rounded-xl bg-slate-100' />
    </div>
  )
}

export default AdminFormInput
