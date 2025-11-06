
import React, { useRef, useState } from 'react';
import { PlayIcon, PauseIcon } from './icons/Icons';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 bg-white/80 dark:bg-charcoal/80 backdrop-blur-md p-3 rounded-full shadow-2xl transition-all">
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="metadata" onEnded={() => setIsPlaying(false)}></audio>
      <button onClick={togglePlayPause} className="w-12 h-12 flex items-center justify-center bg-accent text-charcoal rounded-full focus:outline-none focus:ring-2 focus:ring-accent-darker transition-transform transform hover:scale-110">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div className="hidden sm:block pr-3">
        <p className="text-sm font-semibold text-charcoal dark:text-white">Motivational Clip</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">A moment of inspiration</p>
      </div>
    </div>
  );
};

export default AudioPlayer;
