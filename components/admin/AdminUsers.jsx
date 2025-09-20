'use client'
import { useCallback, useContext, useState } from "react";
import AdminUsersCard from "./AdminUsersCard";
import { StateContext } from "@/context/ContextProvider";
import LoadingPage from "../LoadingPage";
import toast from "react-hot-toast";

export default  function AdminUsers() {
  const [data, setData] = useState([])
  const {loading, setLoading} = useContext(StateContext)

  const GetUser = async()=>{
    setLoading(true)
    try{
      const response = await fetch("/api/admin/users")
      const result = await response.json()
      setLoading(true)
      if(response.ok ==true){
        setLoading(false)
        setData(result.users)
      }
    }catch(error){
      setLoading(false)
      toast.error(error)
    }
  }
  const DeleteUser =async(id)=>{
      try{
        const response = await fetch(`/api/admin/users/${id}`, {
          method: 'DELETE'
        })
        const result = await response.json()
        if(response.ok){
          toast.success(result.message)
          GetUser()
        }else{
          toast.error(result.error)
        }
      }catch(error){
       toast.error(result.error)
      }
    }

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
    {data.length ==0 && (
      <div className="text-4xl text-center mt-10">
        <p>No data</p>
      </div>
    )}
      {data.map((item)=> (
          <AdminUsersCard key={item.id} name={item.name} email={item.email} role={item.role} id={item.id} onclick={()=> DeleteUser(item.id)}/>
      ))}
    </div>
  );
}
