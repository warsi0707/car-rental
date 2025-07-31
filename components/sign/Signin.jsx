"use client";
import React, { memo, useRef, useState } from "react";
import SignFormInput from "./SignFormInput";
import SignButton from "./SignButton";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import LoadingPage from "../LoadingPage";

function Signin() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const HandleSignin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      if (!email || !password) {
        toast.error("All inout required");
      }
      const res = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
      setLoading(true);
      if (res.ok == true) {
        setLoading(false);
        toast.success("Signin success");
      } else {
        toast.error("Signin failed");
      }
    } catch (error) {
      toast.error(error);
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
          <SignButton onclick={HandleSignin} title={"Signin"} />

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
        </div>
      </div>
      {loading && <LoadingPage />}
    </div>
  );
}

export default memo(Signin);
