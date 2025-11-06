import React from 'react';

const AudioVisualizer: React.FC = () => {
  const bars = Array.from({ length: 50 });

  return (
    <div className="w-full h-full flex items-end justify-center space-x-1 overflow-hidden">
      {bars.map((_, i) => (
        <div
          key={i}
          className="w-2 bg-accent/70 animate-visualizer-bar"
          style={{
            animationDelay: `${Math.random() * 1.5}s`,
            animationDuration: `${1 + Math.random()}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default AudioVisualizer;