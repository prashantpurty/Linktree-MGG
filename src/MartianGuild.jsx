import React, { useMemo, useCallback, useState, useEffect, useRef } from "react";
import ActionLink from "./ActionLink";
import videoSrc from "./assets/bg.mp4";

const actionLinks = [
  {
    text: "Join the Martian Crew!",
    bgColor: "bg-indigo-500/70 hover:bg-indigo-600/70 transition-colors",
    textColor: "text-white font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/6fa0ed4202851ea2b315a9b76467f038848c45e40138bd59faebb15ae88821c0?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://discord.gg/bc6xPzReuT",
  },
  {
    text: "Watch Epic Battles",
    bgColor: "bg-red-600/70 hover:bg-red-700/70 transition-colors",
    textColor: "text-white font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/af4d30b35d16e7016a08d82e553943c5fd6306fc8aea70d266a5715bc9ed5ba3?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://www.youtube.com/@Martiansgaminguild",
  },
  {
    text: "Follow Us on X",
    bgColor: "bg-neutral-300/70 hover:bg-neutral-400/70 transition-colors",
    textColor: "text-black font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/e015838283f69c307f712b25f9d0279e2957da18fd40978a415ac54c50dc54fd?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://x.com/martiansGGC",
  },
  {
    text: "Chat with us",
    bgColor: "bg-green-500/70 hover:bg-green-600/70 transition-colors",
    textColor: "text-white font-bold text-xl md:text-2xl",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/964569bf38ef1d300c0b7be677ebecb0055e70f06945441f56de80a981d30ed2?apiKey=d8e705719ec941cca882091ae3698935&",
    href: "https://chat.whatsapp.com/JMjhvYCW1iLIuCKANHFNB8",
  },
];

function MartianGuild() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const memoizedLinks = useMemo(() => actionLinks, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      // Show content after video is loaded with a slight delay for smooth transition
      setTimeout(() => setIsContentVisible(true), 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    
    // Preload the video
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  const renderActionLinks = useCallback(() => {
    return memoizedLinks.map((link, index) => (
      <ActionLink
        key={index}
        text={link.text}
        bgColor={link.bgColor}
        textColor={link.textColor}
        iconSrc={link.iconSrc}
        href={link.href}
      />
    ));
  }, [memoizedLinks]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16 text-center text-white">
      {/* Loading State */}
      {!isVideoLoaded && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-white text-2xl animate-pulse">Loading...</div>
        </div>
      )}

      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Glassmorphic Container */}
      <div 
        className={`relative w-full max-w-4xl mx-auto backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/20 p-8 overflow-hidden transition-opacity duration-500 ${
          isContentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-70"></div>

        {/* Content */}
        <div className="relative z-10">
          <img
            loading="eager"
            src="https://cdn.builder.io/api/v1/image/assets/d8e705719ec941cca882091ae3698935/5fee169d5ef732d02b6c5b9469a9bf24c51ce259b638f476abafc8b2a85c2d31?apiKey=d8e705719ec941cca882091ae3698935&"
            alt="Martian Gaming Guild Logo"
            className="object-contain mx-auto w-[300px] max-md:w-[200px] drop-shadow-2xl animate-pulse"
          />
          <h1 className="mt-6 text-5xl font-bold tracking-wide max-md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
            MARTIANS GAMING GUILD
          </h1>
          <p className="mt-6 text-xl font-semibold tracking-widest max-md:text-lg text-white/90">
            Unite, Play, Conquer
          </p>

          {/* Buttons Section */}
          <div className="w-full max-w-2xl mx-auto mt-8 space-y-4">
            {renderActionLinks()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MartianGuild);