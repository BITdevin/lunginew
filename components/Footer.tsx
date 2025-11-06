
import React from 'react';
import { InstagramIcon, TikTokIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white dark:bg-black">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="mb-4 md:mb-0 text-sm text-gray-400 leading-relaxed">
            &copy; {new Date().getFullYear()} Lungile Mhango. All Rights Reserved. <br/>
            Website by <a href="https://bizwhatwhat.co.za" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Bizwhatwhat</a>
          </p>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/officially_lungile_mhango" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-accent transition-transform transform hover:scale-110">
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@lungilemango" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-accent transition-transform transform hover:scale-110">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
