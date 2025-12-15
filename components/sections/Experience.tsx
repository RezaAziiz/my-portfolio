import React from 'react';
import Card from '../ui/Card';
import { EXPERIENCE } from '../../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 container mx-auto" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-4">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary sticky top-32">Experience</h2>
        </div>

        <div className="lg:col-span-8 space-y-6">
          {EXPERIENCE.map((job) => (
            <Card key={job.id} className="group hover:border-accent/30 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                   <h3 className="font-display font-bold text-xl text-primary group-hover:text-accent transition-colors">{job.role}</h3>
                   <span className="text-lg text-secondary">{job.company}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
