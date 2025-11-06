
import React, { useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './icons/Icons';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#career', label: 'Career' },
    { href: '#foundation', label: 'Foundation' },
    { href: '#business', label: 'Business' },
    { href: '#media', label: 'Media' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/80 dark:bg-dark-bg/80 backdrop-blur-md transition-colors duration-300 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-charcoal dark:text-white hover:text-accent dark:hover:text-accent transition-colors">
          Lungile Mhango
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-text dark:text-dark-text hover:text-accent dark:hover:text-accent transition-colors duration-200 font-medium">
              {link.label}
            </a>
          ))}
          <a href="#booking" className="px-5 py-2 bg-accent text-charcoal font-bold rounded-full hover:bg-accent-darker transition-transform transform hover:scale-105 shadow-md">
            Book Me
          </a>
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2 rounded-full text-charcoal dark:text-white hover:bg-accent/20 transition-colors">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
           <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2 mr-2 rounded-full text-charcoal dark:text-white hover:bg-accent/20 transition-colors">
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-charcoal dark:text-white z-10">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 right-0 bg-base dark:bg-dark-bg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'}`}>
          <nav className="flex flex-col items-center space-y-6 py-8 pt-24">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-xl text-charcoal dark:text-dark-text hover:text-accent dark:hover:text-accent transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <a href="#booking" onClick={handleLinkClick} className="mt-4 px-8 py-3 bg-accent text-charcoal font-bold rounded-full hover:bg-accent-darker transition-transform transform hover:scale-105 shadow-md text-lg">
              Book Me
            </a>
          </nav>
      </div>
    </header>
  );
};

export default Header;
