
import React from 'react';
import FadeInSection from './FadeInSection';
import { MicIcon } from './icons/Icons';

const About: React.FC = () => {
  const keyRoles = [
    'Radio Host',
    'MC',
    'DJ',
    'Motivational Speaker',
    'Entrepreneur',
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-2">
            <FadeInSection>
              {/* Sticky container ensures the image stays in view on larger screens */}
              <div className="sticky top-28">
                <img
                  src="/media/hero.jpg"
                  alt="Lungile Mhango smiling warmly"
                  className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </FadeInSection>
          </div>
          <div className="md:col-span-3">
            <FadeInSection delay={200}>
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6 leading-tight">The Voice of <span className="text-accent">Mpumalanga</span></h2>
                  <p className="text-lg text-gray-text dark:text-dark-text/80 leading-relaxed">
                    Lungile Mhango, affectionately known as Sbukubukwana, is more than just a voice on the radio; she's a beacon of hope and inspiration across Mpumalanga.
                  </p>
                </div>

                {/* On-Air Shows Section */}
                <FadeInSection delay={300}>
                  <div>
                    <h3 className="font-bold text-2xl mb-4 text-charcoal dark:text-white">On-Air Presence</h3>
                    <div className="bg-base dark:bg-dark-bg/50 border-l-4 border-accent pl-6 py-4 rounded-r-lg shadow-md flex items-center gap-4">
                      <MicIcon />
                      <div>
                        <h4 className="font-bold text-xl text-charcoal dark:text-white">Tfokomala Nami</h4>
                        <p className="text-gray-text dark:text-dark-text/80 font-medium">Ligwalagwala FM — Weekdays, 9 am to 12 pm</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>

                {/* Key Roles Section */}
                <FadeInSection delay={400}>
                    <div>
                        <h3 className="font-bold text-2xl mb-4 text-charcoal dark:text-white">Key Roles</h3>
                        <div className="flex flex-wrap gap-3">
                            {keyRoles.map((role) => (
                              <span key={role} className="bg-accent/20 text-accent-darker dark:bg-accent/10 dark:text-accent font-semibold px-4 py-2 rounded-full text-sm">
                                {role}
                              </span>
                            ))}
                        </div>
                    </div>
                </FadeInSection>

                {/* Story of a Scar Section */}
                <FadeInSection delay={500}>
                    <div className="p-6 border-l-4 border-accent bg-base dark:bg-dark-bg/50 rounded-r-lg shadow-inner">
                      <h3 className="font-bold text-xl mb-2 text-charcoal dark:text-white">The Story of a Scar</h3>
                      <p className="italic text-gray-text dark:text-dark-text/70 leading-relaxed">
                        "Growing up, I had a prominent scar on my face from a childhood accident. For years, it was a source of insecurity. But one day, I looked in the mirror and decided this scar wasn't a flaw; it was a map of my journey. It told a story of survival, resilience, and the strength that comes from embracing your imperfections. Today, I wear it with pride, a reminder that our deepest wounds can become our greatest strengths."
                      </p>
                    </div>
                </FadeInSection>

              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;