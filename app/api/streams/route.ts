import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

import { NextRequest, NextResponse } from "next/server";

// @ts-ignore
import  youtubesearchapi  from "youtube-search-api";
import { z} from "zod"

const YT_REGEX = new RegExp("^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([^&=%\?]{11})")


const CreateStreamSchema = z.object({
    creatorId : z.string(),
    url : z.string().url()
})
export async function POST(req : NextRequest){
    try {
        const body =   CreateStreamSchema.parse(await req.json())

        const isYt = YT_REGEX.test(body.url)
        if(!isYt)
        {
            return NextResponse.json({
                msg : "wrong yt url "
            },{
                status : 411
            })
        }

        const extractedId = body.url.split("?v=")[1];

     const res = await   youtubesearchapi.GetVideoDetails(extractedId)
     console.log(res.title)
    console.log(body.creatorId)
     const thumbnails = res.thumbnail.thumbnails
     thumbnails.sort((a:{width:number },b:{width : number})=>a.width < b.width ? -1 :1)
    //  console.log(JSON.stringify(res.thumbnail.thumbnails))
       const stream =  await prismaClient.stream.create({
            data:{
                userId : body.creatorId,
                url : body.url,
                extractedId : extractedId,
                type : "Youtube",
                title:  res.title ?? "can't find title",
                smallImg: (thumbnails.length >1 ? thumbnails[thumbnails.length-1].url: thumbnails[thumbnails.length-1].url) ?? "https://th.bing.com/th/id/OIP.q7hrrlJmYEnTavqubhP6fwHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7",
                bigImg : thumbnails[thumbnails.length-1].url ?? "https://th.bing.com/th/id/OIP.q7hrrlJmYEnTavqubhP6fwHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            }
        })
        return NextResponse.json({
            msg : "add stream ",
            id : stream.id,
            title : stream.title
        })
    } catch (error) {
        return NextResponse.json({
            msg : "wrong input"
        },{
            status:411
        })
    }
}



export async function GET(req : NextRequest) {
    const creatorId = req.nextUrl.searchParams.get("creatorId")

    const session  = await getServerSession();
    const user = await prismaClient.user.findFirst({
        where:{
            email : session?.user?.email ?? ""
        }
    })
    if(!user)
    {
        return NextResponse.json({
            msg : "unauthenticated"
        },{
            status : 403
        })
    }

    if(!creatorId)
    {
        return NextResponse.json({
            message: "Error"
        }, {
            status: 411
        })
    }
    const [stream , activeStream] = await Promise.all([await prismaClient.stream.findMany({
        where:{
            userId : user.id,
            played : false
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
    }),
    prismaClient.currentStream.findFirst({
        where:{
            userId : creatorId
        },
        include:{
            stream:true
        }
    }) 
])
return NextResponse.json({
    streams : stream.map(({ _count   , ...rest})=>({
        ...rest,
        upvote : _count.upvote,
        haveUpvoted : rest.upvote.length ? true :false
    })),
    activeStream
})

}