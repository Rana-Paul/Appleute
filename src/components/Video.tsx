"use client";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
    setIsClient(true)
    }
  }, []);
  
  return (
    <div suppressHydrationWarning={true} className="aspect-videon relative">

      {isClient ? (
        <ReactPlayer
        width="100%"
        height="auto"
        playing
        playsinline
        loop={true}
        className="w-full h-full "
        url="/img/rocket.mp4"
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        style={{borderRadius: "100px",}}
      />
      ): <Loader2 className="h-4 w-4 animate-spin" />}
    </div>
    
  );
};

export default Video;

