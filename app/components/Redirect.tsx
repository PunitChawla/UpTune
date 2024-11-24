"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Redirect(){
    const session = useSession();
    const router = useRouter();
    setTimeout(() => {
        
    }, 2000);
    useEffect( ()=>{
        
        if(session?.data?.user){
            console.log(session.data.user);
            router.push("/dashboard")
        }
    },[session, router])
    return null
}