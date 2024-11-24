// import StreamView from "@/app/components/StreamView"

// export default function({
//     params:{
//         creatorId
//     }
// }:{
//     params:{
//         creatorId : string
//     }
// }){
//     return <div>
//         <StreamView creatorId={creatorId} playVideo={false}/>
//     </div>
// }

import StreamView from "@/app/components/StreamView";

const StreamComponent = ({
  params: { creatorId },
}: {
  params: { creatorId: string };
}) => {
  return (
    
    <div>
      <StreamView creatorId={creatorId} playVideo={false} />
    </div>
  );
};

export default StreamComponent;
