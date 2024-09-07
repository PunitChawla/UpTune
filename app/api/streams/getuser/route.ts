"use client"
import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { Elsie_Swash_Caps } from "next/font/google";
import { NextResponse } from "next/server";

export async function GET()
{
    const session =  await getServerSession();
    const user = await prismaClient.user.findFirst({
        where :{
            email : session?.user?.email ?? ""
        }
    })
    if(!user)
    {
            return NextResponse.json({
                msg : "unathenticated"
            },{
                status : 403
            })
    }
    return NextResponse.json({
        userId : user.id
    },{
        status : 200
    })
}