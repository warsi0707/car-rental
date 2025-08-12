'use client'
import { useCallback, useContext, useState } from "react";
import AdminUsersCard from "./AdminUsersCard";
import { StateContext } from "@/context/ContextProvider";
import LoadingPage from "../LoadingPage";

export default  function AdminUsers() {
  const [data, setData] = useState([])
  const {loading, setLoading} = useContext(StateContext)

  const GetUser = useCallback(async()=>{
    try{
      const response = await fetch("/api/auth/admin/users")
      const result = await response.json()
      console.log(result.users)
      setLoading(true)
      if(response.ok ==true){
        setLoading(false)
        setData(result.users)
      }
    }catch(error){
      setLoading(false)
      console.error(error)
    }
  },[])

  useState(()=>{
    GetUser()
  },[])

  if(loading ===true){
    return (
      <LoadingPage/>
    )
  }
  return (
    <div
   
    className="bg-gray-200  h-screen rounded-3xl text-black p-5 flex flex-col gap-5">
      {data.map((item)=> (
          <AdminUsersCard key={item.email} name={item.name} email={item.email} role={item.role}/>
      ))}
    </div>
  );
}
