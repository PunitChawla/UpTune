"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music } from "lucide-react"
import Link from "next/link"
export function Appbar(){
    const session = useSession();
    return <div className="h-16 bg-transparent relative z-50">
        <div className="flex justify-between items-center h-full px-4 lg:px-6">
            <div>
                <Link className="flex items-center justify-center" href="#">
                    <Music className="h-6 w-6 text-purple-400" />
                    <span className="ml-2 text-2xl font-bold text-white">Melodi</span>
                </Link>
            </div>
            <div>
                <nav className="flex gap-4 sm:gap-6">
                    {!session.data?.user && (
                        <Button 
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border-0 font-medium px-6 py-2 rounded-full" 
                            onClick={()=>signIn()}
                        >
                            Sign In
                        </Button>
                    )}
                    {session.data?.user && (
                        <Button 
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border-0 font-medium px-6 py-2 rounded-full" 
                            onClick={()=>signOut({callbackUrl : "/"})}
                        >
                            Logout
                        </Button>
                    )}
                </nav> 
            </div>
        </div>
    </div>
}
