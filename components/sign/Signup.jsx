"use client";
import React, { memo, useContext, useRef, useState } from "react";
import SignFormInput from "./SignFormInput";
import Link from "next/link";
import SignButton from "./SignButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import LoadingPage from "../LoadingPage";
import { StateContext } from "@/context/ContextProvider";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function Signup() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPassRef = useRef("")
  const router = useRouter();
  const {loading, setLoading} = useContext(StateContext)
  const [showPassword, setShowPassword] = useState(false)

  const SignUp = async (e) => {
    e.preventDefault();
    setLoading(true)
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword =confirmPassRef.current.value;
    

    try {
      const res = await fetch(`/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword}),
      });
      const result = await res.json();
      setLoading(true);
      if (res.ok ==true) {
        setLoading(false);
        toast.success(result.message);
        router.push("/");
      } else {
        setLoading(false);
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="h-screen w-screen px-10 my-10">
      <div className="bg-indigo-400 flex flex-col-reverse sm:flex-row w-full h-screen sm:pl-10 rounded-2xl">
        <div className=" h-full w-full flex flex-col gap-3  justify-center items-center pb-20">
          <h1 className="text-2xl text-black pb-5">Create an account</h1>
          <SignFormInput
            refs={nameRef}
            label={"Full Name"}
            placeholder={"Johny Depp"}
            type={"text"}
          />
          <SignFormInput
            refs={emailRef}
            label={"Email"}
            placeholder={"Johny@gmail.com"}
            type={"Email"}
          />
          <div className="flex flex-col gap-2 w-80">
            <label className="text-sm font-thin">Password</label>
            <div className=" rounded-3xl bg-slate-200 text-black  flex gap-1 justify-between px-4">
              <input
                ref={passwordRef}
                className="w-full p-2 px-0 outline-none"
                placeholder="Password"
                type={`${showPassword? "text": "password"}`}
              />
              <button onClick={()=> setShowPassword(!showPassword)} className="cursor-pointer">{showPassword? <FaRegEyeSlash/>:<FaRegEye/>}</button>
            </div>
            
          </div>
          <div className="flex flex-col gap-2 w-80">
            <label className="text-sm font-thin">Password</label>
            <div className=" rounded-3xl bg-slate-200 text-black  flex gap-1 justify-between px-4">
              <input
                ref={confirmPassRef}
                className="w-full p-2 px-0 outline-none"
                placeholder="Password"
               type={`${showPassword? "text": "password"}`}
              />
              <button onClick={()=> setShowPassword(!showPassword)} className="cursor-pointer">{showPassword? <FaRegEyeSlash/>:<FaRegEye/>}</button>
            </div>
            
          </div>
          <button onClick={SignUp} className="bg-yellow-300 cursor-pointer text-black p-2 rounded-full w-80 mt-2">{loading? "Loading...": "Signup"}</button>
          
          <div className="flex text-black w-96 text-sm justify-between mt-20">
            <p>
              Have an account?{" "}
              <Link href={"/"} className="underline ">
                Signin
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
        </div>
      </div>
    </div>
  );
}

export default memo(Signup);
