"use client"

import { useEffect, useRef, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown, Share2 , Play, Flashlight} from "lucide-react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Appbar } from '../components/Appbar'

//@ts-ignore
import YouTubePlayer  from 'youtube-player'

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/)
  return match ? match[1] : null
  // return the specific id or any yt url (hOHKltAiKXQ)
}
type Video = {
  id: string
  title: string
  votes: number
  haveUpvote : boolean
  bigImg ? : string
  extractedId? : string
  url ?: string
  streamId? : string
  
}
const REFRESH_INTERVAL_MS = 10*1000;
export default function StreamView({
    creatorId,
    playVideo
}:{
    creatorId : string
    playVideo : boolean
}) {
  const [inputUrl, setInputUrl] = useState('')
  const [previewId, setPreviewId] = useState<string | null>(null)
  const [queue, setQueue] = useState<Video[]>([])
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Video | null>(null)
  const [playnextloader , setPlaynextloader] = useState(false)
  const [loading , setLoding] = useState(false)
  const videoPlayerRef = useRef();
  let hasFetched = false; // Flag to prevent duplicate fetches
async function refreshStream(){
  if(hasFetched== true)
  {
    return
  }
  hasFetched = true
  const res =  await fetch(`/api/streams/?creatorId=${creatorId}`,{
    credentials : "include"
  });
  console.log(creatorId)
  if (res.ok) {
    const data = await res.json(); // Parse the JSON response
    console.log(data);
  
    // Accessing the streams array
    const streams = data.streams;
    //@ts-ignore
    streams.forEach(stream => {
      const id = getYouTubeId(stream.url) || ""
      const title = stream.title;
    const upvotes = stream.upvote;
    const streamId = stream.id;
    const haveUpvote = stream.haveUpvote; 
    const bigImg = stream.bigImg;
    const extractedId = stream.extractedId;
    const url = stream.url
      setQueue(prevQueue => [
        ...prevQueue,
        { streamId, id, title, votes: upvotes , haveUpvote,bigImg,extractedId, url},
      ]);
    });
    console.log("active stream");
    console.log(data.activeStream)
    setCurrentlyPlaying(queue[0])
    // currentlyPlaying?.extractedId = getYouTubeId(data.activeStream.url); 
  }
}

useEffect(()=>{
  refreshStream();

    const inteval = setInterval(() => {
      
    },);
  },[REFRESH_INTERVAL_MS])


  useEffect(()=>{
    if(!videoPlayerRef){
        console.log("not done")
        return;
    }

    let player = YouTubePlayer(videoPlayerRef.current);
    player.loadVideoById(currentlyPlaying?.extractedId);
    player.playVideo();
    //@ts-ignore
    player.on('stateChange',(event)=>{
        console.log(event.data)
    })
    

  },[currentlyPlaying , videoPlayerRef])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value)
    const id = getYouTubeId(e.target.value)
 
    setPreviewId(id)
  }

  const handleSubmit = async () => {
       setInputUrl('')
        setPreviewId(null)
    const id = getYouTubeId(inputUrl)
    if (id) {
        setLoding(true);
        
       const res = await fetch('/api/streams', {
            method: "POST",
            body: JSON.stringify({
                creatorId : creatorId,
                url : inputUrl
            }),
        });
        if(res.ok)
        {
            const data =  await res.json()
            const title = data.title;
            setQueue([...queue, {  id, title, votes: 0 , haveUpvote : false},])
        }
        // refreshStream();
        setLoding(false)
        
    }
  }

  const handleVote = (id: string, index: number, increment: number) => {
    const newQueue = [...queue];
    
    // Update the votes
    newQueue[index].votes += increment;
    
    // Update the haveUpvote property based on the increment
    newQueue[index].haveUpvote = increment === 1;
  
    // Sort the queue based on votes
    newQueue.sort((a, b) => b.votes - a.votes);
  
    // Update the state
    setQueue(newQueue);
  
    // Perform the fetch request
    const endpoint = increment === 1 ? "/api/streams/upvote" : "/api/streams/downvote";
    
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        streamId: id
      }),
    });
  };
  

  const  playnext = async()=>{

    if(queue.length >0)
    {
        setPlaynextloader(true);
        const data = await fetch('/api/streams/next',{
        method :"GET"
       })
       if(data.ok)
       {
           const json = await data.json();
           console.log(json);
       }
        setCurrentlyPlaying(queue[0]);
        setQueue(queue.slice(1));
        
    }   
    setPlaynextloader(false)
    
  }
  const handleShare = () => {
    if (currentlyPlaying) {
      const shareUrl = `${window.location.hostname}:${window.location.port}/creator/${creatorId}`
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast.success(`Video URL copied to clipboard!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      }, (err) => {
        console.error('Could not copy text: ', err)
        toast.error('Failed to copy URL. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      })
    }
  }
  
  return (
      
      <div className="w-full min-h-screen py-12 md:py-24 lg:py-5 xl:py-5 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <Appbar></Appbar>    
      
      <div className="max-w-4xl mx-auto p-4 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-100">Stream Song Voter</h1>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              type="text"
              placeholder="Enter YouTube URL"
              value={inputUrl}
              onChange={handleInputChange}
              className="bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
              />
           { <Button onClick={handleSubmit} disabled={loading} className="bg-indigo-600 hover:bg-indigo-700 text-white">
              {loading ? "Loading..." : "Add to queue"}
            </Button>}
          </div>
          {previewId &&  (
            <div className="aspect-video">
              <img
                src={`https://img.youtube.com/vi/${previewId}/0.jpg`}
                alt="Video preview"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
          )}
        </div>

            <div className=' col-start-2 col-end-4'>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-100">Currently Playing</h2>
            <Button
              onClick={handleShare}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
          {currentlyPlaying && (
  <div className="aspect-video">
    {/* {playVideo ?<>
    <div ref={videoPlayerRef}>

    </div>
    </> : <></>} */}
    <iframe
      width="100%"
      height="100%"
      // @ts-ignore
      src={`https://www.youtube.com/embed/${currentlyPlaying.extractedId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg"
    ></iframe>
    {/* <VideoPlayer currentlyPlaying={currentlyPlaying} pa/> */}
  </div>
)}
        </div>
        </div>
        { playVideo  && <Button disabled={playnextloader} onClick={playnext} className='w-full bg-purple-700 hover:bg-purple-800 text-white'>
            <Play className = "mr-2 h-4 w-4" />{playnextloader ? "Loading..." : "Play next "}
             </Button>}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-100">Upcoming Songs</h2>
          {queue.length==0 && <Card className='bg-gray-900 border-gray-800'>
            <CardContent className='"p-4'><p className='text-center py-8 text-gray-400'> No video in queue</p> </CardContent>
            </Card>}
          {queue.map((video, index) => (
            <Card key={video.id} className="bg-gray-800 border-gray-700">
              <CardContent className="flex items-center space-x-4 p-4">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/default.jpg`}
                  alt={video.title}
                  className="w-24 h-18 object-cover rounded"
                  />
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-100">{video.title}</h3>
                  <p className="text-sm text-gray-400">Votes: {video.votes}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    //@ts-ignore
                    onClick={() => ( !video.haveUpvote && handleVote(video.streamId , index, 1)) }
                    className="border-gray-600 text-gray-300 hover:bg-gray-700">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    //@ts-ignore
                    onClick={() => ( video.haveUpvote && handleVote(video.streamId , index, -1))}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>

  )
}

// https://www.youtube.com/watch?v=0pWsCiBvLOk
// https://www.youtube.com/watch?v=JGwWNGJdvx8