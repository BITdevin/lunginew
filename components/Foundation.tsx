
import React from 'react';
import FadeInSection from './FadeInSection';

const Foundation: React.FC = () => {
  return (
    <section id="foundation" className="py-20 md:py-32 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6">Lungile Mhango <span className="text-accent">Foundation</span></h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-text dark:text-dark-text/80 leading-relaxed">
            Founded on March 3, 2021, the Lungile Mhango Foundation (K2021448823) is dedicated to uplifting and empowering youth in Mpumalanga through mentorship, educational support, and community-building initiatives.
          </p>
          <div className="flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:foundation@lungilemhango.co.za"
              className="px-8 py-4 bg-accent text-charcoal font-bold rounded-full hover:bg-accent-darker transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              Get Involved
            </a>
            <a
              href="#booking"
              className="px-8 py-4 bg-charcoal text-white dark:bg-gray-700 dark:hover:bg-gray-600 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              Donate / Partner
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Foundation;
