// import { prismaClient } from "@/app/lib/db";
// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";


// export async function GET()
// {
//     const session =  await getServerSession();
//     const user = await prismaClient.user.findFirst({
//         where :{
//             email : session?.user?.email ?? ""
//         }
//     })
//     if(!user)
//     {
//             return NextResponse.json({
//                 msg : "unathenticated"
//             },{
//                 status : 403
//             })
//     }

//     const mostUpvotedStream = await prismaClient.stream.findFirst({
//         where:{
//             userId : user.id,
//             played : false
//         },
//         orderBy:{
//             upvote:{
//                 _count : "desc"
//             }
//         }
//     })
//     await Promise.all([prismaClient.currentStream.upsert({
//         where:{
//             userId : user.id
//         },
//         update:{
//             userId : user.id,
//             streamId : mostUpvotedStream?.id
//         },
//         create:{
//             userId : user.id,
//             streamId : mostUpvotedStream?.id
//         }
//     }), prismaClient.stream.update({
//         where:{
//             id : mostUpvotedStream?.id ?? ""
//         },
//         data:{
//             played : true,
//             playedTs : new Date()
//         }

//     })])


//     const [streams , activeStream] = await  Promise.all([await prismaClient.stream.findMany({
//         where:{
//             userId: user.id
//         },
//         include:{
//             _count  :{
//                 select:{
//                     upvote:true 
//                 }
//             },
//             upvote:{
//                 where :{
//                     userId : user.id
//                 }
//             }
//         }
//     }), prismaClient.currentStream.findFirst({
//         where:{
//             userId : user.id
//         },
//         include : {
//             stream : true
//         }
//     })])
//     return NextResponse.json({
//         streams : streams.map(({ _count   , ...rest})=>({
//             ...rest,
//             upvote : _count.upvote,
//             haveUpvoted : rest.upvote.length ? true :false
//         })),
//         activeStream
//     })
// }


import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();

  // Ensure session exists
  if (!session || !session.user?.email) {
    return NextResponse.json(
      {
        msg: "unauthenticated",
      },
      {
        status: 403,
      }
    );
  }

  const user = await prismaClient.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return NextResponse.json(
      {
        msg: "unauthenticated",
      },
      {
        status: 403,
      }
    );
  }

  const mostUpvotedStream = await prismaClient.stream.findFirst({
    where: {
      userId: user.id,
      played: false,
    },
    orderBy: {
      upvote: {
        _count: "desc",
      },
    },
  });

  // If no upvoted streams are found
  if (!mostUpvotedStream) {
    return NextResponse.json(
      {
        msg: "No streams available to upvote",
      },
      {
        status: 404,
      }
    );
  }

  await Promise.all([
    prismaClient.currentStream.upsert({
      where: {
        userId: user.id,
      },
      update: {
        userId: user.id,
        streamId: mostUpvotedStream.id,
      },
      create: {
        userId: user.id,
        streamId: mostUpvotedStream.id,
      },
    }),
    prismaClient.stream.update({
      where: {
        id: mostUpvotedStream.id,
      },
      data: {
        played: true,
        playedTs: new Date(),
      },
    }),
  ]);

  const [streams, activeStream] = await Promise.all([
    prismaClient.stream.findMany({
      where: {
        userId: user.id,
      },
      include: {
        _count: {
          select: {
            upvote: true,
          },
        },
        upvote: {
          where: {
            userId: user.id,
          },
        },
      },
    }),
    prismaClient.currentStream.findFirst({
      where: {
        userId: user.id,
      },
      include: {
        stream: true,
      },
    }),
  ]);

  // Format streams data for response
  const formattedStreams = streams.map(({ _count, ...rest }) => ({
    ...rest,
    upvote: _count.upvote,
    haveUpvoted: rest.upvote.length > 0,
  }));

  return NextResponse.json({
    streams: formattedStreams,
    activeStream,
  });
}
