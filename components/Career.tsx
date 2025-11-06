
import React from 'react';
import FadeInSection from './FadeInSection';
import { RadioIcon, MicIcon, StarIcon, RocketIcon } from './icons/Icons';

const Career: React.FC = () => {
  const timelineEvents = [
    {
      year: '2006',
      title: 'The Journey Begins',
      description: 'Lungile takes her first steps into broadcasting at Barberton Community Radio, honing her skills and finding her voice.',
      icon: <RadioIcon />,
    },
    {
      year: 'Present',
      title: 'Ligwalagwala FM Host',
      description: 'Becomes the beloved host of "Tfokomala Nami", a cornerstone of weekday morning radio in Mpumalanga.',
      icon: <MicIcon />,
    },
    {
      year: 'Ongoing',
      title: 'Vodacom Ambassador',
      description: 'Represents Vodacom in Mpumalanga, connecting with communities and championing digital inclusion.',
      icon: <StarIcon />,
    },
    {
      year: '2025 & Beyond',
      title: 'Future Aspirations',
      description: 'Expanding her motivational speaking engagements and growing the foundation\'s reach to empower more young people.',
      icon: <RocketIcon />,
    },
  ];

  return (
    <section id="career" className="py-20 md:py-32 bg-base dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal dark:text-white mb-20">Career <span className="text-accent">Milestones</span></h2>
        </FadeInSection>
          
        <div className="relative">
          {/* The vertical timeline bar. Positioned left for mobile, center for desktop. */}
          <div className="absolute top-0 h-full w-0.5 bg-accent/30 left-7 transform -translate-x-1/2 md:left-1/2"></div>
            
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <FadeInSection key={index} delay={index * 200}>
                {/* Each timeline item */}
                <div className="relative">

                  {/* Icon positioned on the timeline bar */}
                  <div className="absolute z-10 left-7 top-1 transform -translate-x-1/2 md:left-1/2">
                      <div className="flex items-center bg-accent shadow-xl w-14 h-14 rounded-full">
                        <span className="mx-auto text-charcoal">{event.icon}</span>
                      </div>
                  </div>

                  {/* Right side content for mobile, alternating for desktop */}
                  <div className={`pl-20 md:pl-0 md:flex ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:items-center`}>
                      
                      {/* Spacer for Desktop to push content to one side */}
                      <div className="md:w-1/2"></div>

                      <div className="md:w-1/2">
                          <div className={`transform transition-transform hover:scale-105 bg-white dark:bg-charcoal rounded-lg shadow-xl p-6 ${index % 2 !== 0 ? 'md:mr-14' : 'md:ml-14'}`}>
                            <p className="text-sm font-semibold text-accent mb-1">{event.year}</p>
                            <h3 className="mb-2 font-bold text-charcoal dark:text-white text-lg md:text-xl">{event.title}</h3>
                            <p className="text-sm leading-relaxed tracking-wide text-gray-text dark:text-dark-text/80">
                              {event.description}
                            </p>
                          </div>
                      </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
