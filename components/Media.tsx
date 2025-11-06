
import React from 'react';
import FadeInSection from './FadeInSection';
import { ArticleIcon, VideoIcon, ExternalLinkIcon } from './icons/Icons';

const mediaItems = [
  {
    type: 'Article',
    icon: <ArticleIcon />,
    source: 'The Citizen / Mpumalanga News',
    title: 'Celebrate your scars with Lungile Mhango',
    description: 'Lungile’s personal story and her advocacy for women to embrace their beauty despite visible scars.',
    link: '#', // Replace with actual article link
    date: 'Jan 2018'
  },
  {
    type: 'Video',
    icon: <VideoIcon />,
    source: 'Facebook',
    title: 'Lungile Mhango at SOPA 2023',
    description: 'Showcasing Lungile’s presence and engagement at the prestigious SOPA 2023 event.',
    link: '#', // Replace with actual video link
    date: '2023'
  },
  {
    type: 'Article',
    icon: <ArticleIcon />,
    source: 'Daily Sun',
    title: 'Radio presenter attacked by taxi-rank men',
    description: 'A serious incident demonstrating her advocacy and the challenges faced in her line of work.',
    link: '#', // Replace with actual article link
    date: 'Nov 2020'
  },
  {
    type: 'Social',
    icon: <VideoIcon />,
    source: 'Instagram',
    title: 'Empowering Young Women on Tfokomala Nami',
    description: 'A conversation on her radio show about empowering the next generation of women.',
    link: '#', // Replace with actual post link
    date: 'Aug 2025'
  },
    {
    type: 'Article',
    icon: <ArticleIcon />,
    source: 'Mpumalanga News',
    title: 'Women’s Month kicks off in style',
    description: 'Lungile was a featured guest speaker at a high-profile Women of Impact event.',
    link: '#', // Replace with actual article link
    date: 'Aug 2019'
  },
  {
    type: 'Video',
    icon: <VideoIcon />,
    source: 'Facebook',
    title: 'The #TLP2024 Vibe with Ligwalagwala FM',
    description: 'Another media moment highlighting her show and engagement with listeners on Ligwalagwala FM.',
    link: '#', // Replace with actual video link
    date: '2024'
  }
];


const Media: React.FC = () => {
  return (
    <section id="media" className="py-20 md:py-32 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6">Media & <span className="text-accent">Moments</span></h2>
            <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-text dark:text-dark-text/80 leading-relaxed">
              A collection of interviews, articles, and notable moments from Lungile's journey in the public eye.
            </p>
          </div>
        </FadeInSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-base dark:bg-dark-bg/50 rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-accent">{item.icon}</span>
                    <span className="font-semibold text-charcoal dark:text-white">{item.type}</span>
                  </div>
                  <span className="text-sm text-gray-text/70 dark:text-dark-text/50">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal dark:text-white mb-2 flex-grow">{item.title}</h3>
                <p className="text-gray-text dark:text-dark-text/70 mb-4 text-sm">{item.description}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-text dark:text-dark-text/60">{item.source}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLinkIcon />
                  </span>
                </div>
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
