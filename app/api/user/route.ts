
import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function  POST(req : NextRequest) {

    
    const session = await getServerSession();
    console.log(session);
    const user = await prismaClient.user.findFirst({
        where:{
            email : session?.user?.email??  ""
        }
    })

    if(!user)
    {
        return NextResponse.json({
            msg : "Unauthenticated"
        },{
            status : 403
        })
    }

    else{
        NextResponse.json({
            user
        })
    }
}

// export async function  GET(req : NextRequest) {
//     return NextResponse.json({
//         msg : "hello"
//     },{
//         status : 200
//     })
// }
