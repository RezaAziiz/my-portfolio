import React, { FormEvent } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { IconMail, IconArrowRight } from '../ui/Icons';
import { PERSONAL_INFO, SOCIALS } from '../../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 container mx-auto" id="contact">
      <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
        
        {/* Decorative circle */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">Let's work together.</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              I'm always open to discussing product design work or partnership opportunities.
            </p>

            <div className="space-y-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <IconMail />
                </div>
                {PERSONAL_INFO.email}
              </a>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Socials</h3>
                <div className="flex gap-6">
                  {SOCIALS.map((social) => (
                    <a 
                      key={social.platform} 
                      href={social.url} 
                      className="text-white hover:text-accent transition-colors underline decoration-white/30 decoration-1 underline-offset-4 hover:decoration-accent"
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button type="submit" variant="secondary" fullWidth className="!bg-white !text-primary hover:!bg-gray-200 !border-none mt-4">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
      
      <footer className="mt-16 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
