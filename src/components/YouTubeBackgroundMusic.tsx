import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface YouTubeBackgroundMusicProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const YOUTUBE_VIDEO_ID = '-2ytdwgJOaI';

export const YouTubeBackgroundMusic: React.FC<YouTubeBackgroundMusicProps> = ({
  isPlaying,
  onToggle,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Send command to YouTube iframe
  useEffect(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    const command = isPlaying ? 'playVideo' : 'pauseVideo';
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: 'command',
        func: command,
        args: [],
      }),
      '*'
    );
  }, [isPlaying, isReady]);

  // Listen to messages from YouTube player to detect state changes
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          if (data.event === 'onReady') {
            setIsReady(true);
          }
        }
      } catch {
        // Not a JSON message or not from YouTube
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      {/* Hidden YouTube IFrame Player */}
      <iframe
        ref={iframeRef}
        id="youtube-bg-music-player"
        src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?enablejsapi=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
        title="Birthday Background Music for Preethi Mam"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
        className="w-1 h-1 opacity-0 pointer-events-none fixed -bottom-20 -right-20"
      />

      {/* Discrete Floating Now-Playing Pill when music is active */}
      {isPlaying && (
        <div className="fixed bottom-6 left-6 z-30 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#D9CDB8] shadow-md text-xs text-[#2A2016]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8860B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8860B]" />
          </span>
          <Music className="w-3.5 h-3.5 text-[#B8860B]" />
          <span className="font-medium text-[#7C5A28]">Playing Background Music</span>
          <button
            onClick={onToggle}
            className="ml-1 text-[11px] text-[#8A7968] hover:text-[#201811] underline transition-colors"
          >
            Pause
          </button>
        </div>
      )}
    </>
  );
};
