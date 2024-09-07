import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest)
{
    const session = await getServerSession();

    const user = await prismaClient.user.findFirst({
        where:{
            email : session?.user?.email?? ""
        }
    });
console.log(session?.user?.email)
    if(!user)
    {
        return NextResponse.json({
            msg : "Unauthenticate"
        },{
            status :403
        })
    }

    const stream = await prismaClient.stream.findMany({
        where:{
            userId : user.id
        },
        include:{
            _count:{
                select:{
                    upvote : true
                }
            },
            upvote:{
                where:{
                    userId :user.id
                }
            }
        }
    })

    return NextResponse.json({
        streams : stream.map(({_count, ...rest})=>({
            ...rest,
            upvotes : _count.upvote,
            haveUpvote: rest.upvote.length ?true :false
        }))
    })
    
}