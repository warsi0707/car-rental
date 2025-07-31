import React, { memo } from 'react'

function SignButton({onclick, title}) {
  return (
    <button onClick={onclick} className='bg-yellow-300 cursor-pointer text-black p-2 rounded-full w-80 mt-2'>{title}</button>
  )
}

export default memo( SignButton)
