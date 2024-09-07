import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod"

const UpvoteSchema = z.object({
    streamId : z.string()
})


export async function  POST(req : NextRequest) {

    // get user details 
    const session = await getServerSession();
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
    try {
        const data = UpvoteSchema.parse(await req.json())
        if(!data)
        {
            return NextResponse.json({
                msg : "incorrect input"
            },{
                status: 500
            })
        }
        console.log(data)
        await prismaClient.upvote.create({
            data:{
                userId : user.id,
                streamId : data.streamId
            }
        });
        return NextResponse.json({
            mes : "Done!"
        })
    } catch (error) {
        return NextResponse.json({
            msg :"error while upvoting ",
            error : error
        },{
            status:500
        })

    }
}