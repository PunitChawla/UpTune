// import { useSession } from "next-auth/react";
// import StreamView from "../components/StreamView";
// import { NextResponse } from "next/server";
"use client"
import { useSession } from "next-auth/react";
import StreamView from "../components/StreamView";
import useRedirect from "../hooks/useRedirect";

const creatorId =  "8d891f4e-6497-4166-843f-3800f40fa79d";

// let creatorId = "";

// const getId = async () => {
//   console.log("called")
//   const res = await fetch('/api/streams/getuser', {
//        method: "GET",
//    });

//    if(res.ok)
//    {
//     return NextResponse.json({
//       userid : res
//     })
//    }
//    else{
//     console.log("error ")
//    }
// }
// console.log(creatorId);
// export default function Component() {
//   getId();
  // return <StreamView creatorId={creatorId} playVideo = {false}/>
// }

// // https://www.youtube.com/watch?v=0pWsCiBvLOk



export default function Dashboard() {
  const { data: session, status } = useSession();
  const Redirect = useRedirect();
  // Check if the session is still loading
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // If there is no session or no user id, prompt the user to log in
  if (!session || !session.user?.id) {
    return <h1>Please Log in....</h1>;
  }

  // If session is available and user id exists, render the StreamView component
  return <StreamView creatorId={session.user.id} playVideo={true} />;
}

