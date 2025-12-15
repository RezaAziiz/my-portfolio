import React from "react";
import Card from "../ui/Card";
import { SKILLS, IMAGES } from "../../constants";

const About: React.FC = () => {
  return (
    <section
      className="py-8 md:py-12 px-4 md:px-6 container mx-auto"
      id="about"
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
            About Me
          </h2>
          <Card className="prose prose-lg text-secondary">
            <p className="mb-4">
              I'm a passionate software engineer who bridges the gap between
              functional code and aesthetic design. My journey began when I
              realized that a great user experience is just as important as the
              logic powering it.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new design trends,
              contributing to open source, or optimizing my development
              workflow. I believe in writing clean, maintainable code that
              scales.
            </p>
          </Card>

          {/* Skills Overview */}
          <div className="space-y-4">
            {SKILLS.map((category) => (
              <Card key={category.title} className="!p-5">
                <h3 className="font-display font-bold text-lg mb-3 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        {/* <div className="w-full md:w-1/2 md:sticky md:top-24">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
             <img 
              src={IMAGES.about} 
              alt="Working in studio" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/800/1000';
              }}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
