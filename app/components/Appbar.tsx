"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music } from "lucide-react"
import Link from "next/link"
export function Appbar(){
    const session = useSession();
    return <div className="h-8">
        <div className="flex justify-between">
            <div>
            <Link className="flex items-center justify-center" href="#">
          <Music className="h-6 w-6 text-purple-500" />
          <span className="ml-2 text-2xl font-bold text-white">Melodi</span>
        </Link>
            </div>
            <div>
        
        <nav className="ml-auto flex gap-4 sm:gap-6 pt-3 pr-3">
            {!session.data?.user && <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={()=>signIn()}>signIn</Button>}
            {session.data?.user && <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={()=>signOut({callbackUrl : "/"})}>Logout</Button>}
        </nav> 
            </div>
        </div>
    </div>
}
