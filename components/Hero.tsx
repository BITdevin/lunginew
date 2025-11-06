
import React from 'react';
import AudioVisualizer from './AudioVisualizer';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen text-white overflow-hidden flex items-center"
      role="banner"
      aria-label="Hero Section"
    >
      {/* 
        Background Image (as <img> tag for performance)
        Using a real <img> tag with fetchPriority="high" is critical for LCP (Largest Contentful Paint).
        It allows the browser's preload scanner to discover and start loading the most important visual element on the page much earlier than a CSS background-image.
      */}
      <img
        src="/media/jjLungi.jpg"
        alt="Professional portrait of Lungile Mhango in a studio"
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-right-center -z-10"
      />
      
      {/* Gradient Overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-charcoal/10 -z-10" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-xl text-center md:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl tracking-tight">
            Lungile <span className="text-accent">Mhango</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-white/90 max-w-3xl drop-shadow-lg">
            Radio Host | MC | DJ | Motivational Speaker | Entrepreneur
          </p>
          <a href="#booking" className="mt-10 inline-block px-8 py-4 bg-accent text-charcoal font-bold rounded-full hover:bg-accent-darker transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
              Book Me For Your Event
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 z-20">
        <AudioVisualizer />
      </div>
    </section>
  );
};

export default Hero;