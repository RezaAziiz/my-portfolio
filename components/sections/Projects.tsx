import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { IconGithub, IconExternalLink } from '../ui/Icons';
import { PROJECTS } from '../../constants';

const Projects: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 container mx-auto bg-gray-50/50 rounded-[3rem] my-10" id="projects">
      <div className="max-w-xl mb-12">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mb-4">Selected Work</h2>
        <p className="text-secondary text-lg">A collection of projects exploring performance, accessibility, and modern UI patterns.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Card key={project.id} noPadding className="group flex flex-col h-full hover:shadow-xl hover:-translate-y-1">
            
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/800/600?random=${project.id}`;
                }}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                 {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="p-3 bg-white rounded-full text-primary hover:bg-gray-200 transition-colors"
                      title="View Code"
                    >
                      <IconGithub className="w-5 h-5" />
                    </a>
                 )}
                 {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="p-3 bg-white rounded-full text-primary hover:bg-gray-200 transition-colors"
                      title="Live Demo"
                    >
                      <IconExternalLink className="w-5 h-5" />
                    </a>
                 )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="font-display font-bold text-xl md:text-2xl text-primary mb-2">{project.title}</h3>
              <p className="text-secondary mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs font-semibold text-gray-500 uppercase tracking-wide border border-gray-200 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
