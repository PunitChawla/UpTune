import React, { useEffect, useRef } from 'react';

//@ts-ignore
const VideoPlayer = ({ currentlyPlaying, playNext }) => {
  const playerRef = useRef(null);

  // This function will run when the YouTube IFrame API script is ready
  function onYouTubeIframeAPIReady() {
    playerRef.current = new YT.Player('youtube-player', {
      videoId: currentlyPlaying.extractedId, // dynamically set the video ID
      events: {
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
        autoplay: 1
      }
    });
  }

  // Detect when the video ends
  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      console.log('Video ended, calling playNext');
      playNext(); // Call the playNext function when the video ends
    }
  }

  // Load the YouTube IFrame API
  useEffect(() => {
    // Dynamically load the IFrame API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Attach the API ready function to the global window object
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    // Cleanup the script when the component is unmounted
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [currentlyPlaying.extractedId]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      {/* Container for YouTube Player */}
      <div id="youtube-player" className="rounded-lg"></div>
    </div>
  );
};

export default VideoPlayer;
