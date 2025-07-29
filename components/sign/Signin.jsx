import React, { memo } from 'react'
import SignFormInput from './SignFormInput'
import SignButton from './SignButton'
import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";



function Signin({close}) {
  return (
    <div className="h-screen w-screen px-10 my-10">
      <div className="bg-indigo-400 flex flex-col-reverse sm:flex-row w-full h-screen sm:pl-10 rounded-2xl">
        <div className=" h-full w-full flex flex-col gap-3  justify-center items-center pb-20">
          <h1 className="text-2xl text-black pb-5">Signin</h1>
          
          <SignFormInput
            label={"Email"}
            placeholder={"Johny@gmail.com"}
            type={"Email"}
          />
          <SignFormInput
            label={"Password"}
            placeholder={"Password"}
            type={"Password"}
          />
          <SignButton title={"Signin"} />
          
          <div className="flex text-black w-96 text-sm justify-between mt-20">
            <p>
              Have'nt an account?{" "}
              <Link href={"/"} className="underline ">
                Signup
              </Link>
            </p>
            <p>Tearm and condition</p>
          </div>
        </div>

        <div className="hidden h-full w-full sm:flex justify-center items-center p-5">
          <img
            className="h-full object-cover rounded-2xl rounded-tr-4xl w-full "
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
             <button onClick={close} className="absolute right-10 top-5 text-3xl text-white cursor-pointer p-2 rounded-full bg-black "><RxCross2/></button>
        </div>
      </div>
    </div>
  )
}

export default memo( Signin)
