import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { IconArrowRight, IconDownload } from '../ui/Icons';
import { PERSONAL_INFO, IMAGES } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 container mx-auto" id="home">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
        
        {/* 1. Headline & Summary - Large Box */}
        <Card className="md:col-span-8 md:row-span-2 flex flex-col justify-between min-h-[400px] md:min-h-[500px]">
          <div>
            <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 text-gray-600">
              Available for hire
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.1] mb-6 text-primary">
              {PERSONAL_INFO.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
            <Button as="a" href="#contact" variant="primary" className="group">
              Contact Me
              <IconArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button as="a" href={IMAGES.cv} download variant="secondary" className="group">
              Download CV
              <IconDownload className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* 2. Profile Image - Right Side Vertical */}
        <div className="md:col-span-4 md:row-span-2 h-[400px] md:h-auto relative rounded-3xl overflow-hidden group">
          <img 
            src={IMAGES.profile} 
            alt="Profile" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback if image is missing
              (e.target as HTMLImageElement).src = 'https://picsum.photos/600/800';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* 3. Stats - Experience */}
        <Card className="md:col-span-4 bg-primary text-white flex flex-col justify-center items-center text-center">
          <span className="font-display font-bold text-5xl md:text-6xl mb-2">{PERSONAL_INFO.yearsExperience}</span>
          <span className="text-gray-400 font-medium">Years Experience</span>
        </Card>

        {/* 4. Stats - Projects */}
        <Card className="md:col-span-4 bg-accent text-white flex flex-col justify-center items-center text-center">
           <span className="font-display font-bold text-5xl md:text-6xl mb-2">{PERSONAL_INFO.projectsCompleted}</span>
           <span className="text-indigo-200 font-medium">Projects Completed</span>
        </Card>

        {/* 5. Stats - Tech */}
        <Card className="md:col-span-4 flex flex-col justify-center items-center text-center border-2 border-dashed border-gray-200 shadow-none">
           <span className="font-display font-bold text-5xl md:text-6xl mb-2 text-primary">{PERSONAL_INFO.technologiesMastered}</span>
           <span className="text-secondary font-medium">Tech Mastered</span>
        </Card>

      </div>
    </section>
  );
};

export default Hero;
