"use client";
import React, { memo, useContext, useRef, } from "react";
import SignFormInput from "./SignFormInput";
import SignButton from "./SignButton";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import LoadingPage from "../LoadingPage";
import { StateContext } from "@/context/ContextProvider";
import SignOptionButton from "./SignOptionButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function Signin() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const {loading, setLoading} = useContext(StateContext);

  const HandleSignin = async (e) => {
    e.preventDefault();
    setLoading(true)
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      if (!email || !password) {
        toast.error("All inout required");
      }
      const res = await signIn("credentials", {
        email,
        password,
        // redirect: true,
        // callbackUrl: "/",
      })
       toast.success("Signin success");
      setLoading(false)
      if (res.ok === true) {
        setLoading(false);
        toast.success("Signin success");
      } else {
        setLoading(false)
        toast.error("Signin failed");
      }
    } catch (error) {
      setLoading(false)
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-screen w-screen px-10 my-10">
      <div className="bg-indigo-400 flex flex-col-reverse sm:flex-row w-full h-screen sm:pl-10 rounded-2xl">
        <div className=" h-full w-full flex flex-col gap-3  justify-center items-center pb-20">
          <h1 className="text-2xl text-black pb-5">Signin</h1>

          <SignFormInput
            refs={emailRef}
            label={"Email"}
            placeholder={"Johny@gmail.com"}
            type={"Email"}
          />
          <SignFormInput
            refs={passwordRef}
            label={"Password"}
            placeholder={"Password"}
            type={"Password"}
          />
          <button onClick={HandleSignin} className="bg-yellow-300 cursor-pointer text-black p-2 rounded-full w-80 mt-2">{loading? "Loading...": "SignIn"}</button>
          <div className="flex  w-full justify-center gap-20">
            <SignOptionButton onclick={() => signIn("google")} icon={<FcGoogle />}/>
            <SignOptionButton onclick={() => signIn("github")} icon={<FaGithub />} />
            </div>
          <div className="flex text-black w-96 text-sm justify-between mt-20">
            <p>
              Have'nt an account?{" "}
              <Link href={"/signup"} className="underline ">
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
        </div>
      </div>
    </div>
  );
}

export default memo(Signin);
