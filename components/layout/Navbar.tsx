import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { IconMenu, IconX } from '../ui/Icons';
import { PERSONAL_INFO } from '../../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary">
            {PERSONAL_INFO.name}.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button as="a" href="#contact" variant="primary" className="!py-2 !px-5 text-sm">
              Get in touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 md:hidden shadow-xl flex flex-col gap-4">
           {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-secondary hover:text-primary py-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
               <Button as="a" href="#contact" variant="primary" fullWidth onClick={() => setMobileMenuOpen(false)}>
                Get in touch
              </Button>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
