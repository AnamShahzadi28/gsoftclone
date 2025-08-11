"use client";
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import portfolioData from '@/json/portfoliodata.json';
import { PortfolioItem } from '@/types/home';
import { Tab, Tabs } from '@heroui/react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'Mobile App' | 'Web App'>('Mobile App');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects: PortfolioItem[] = useMemo(() => {
    const projects = portfolioData.filter(p => p.category === activeTab) as PortfolioItem[];
    setCurrentIndex(0); // Reset index when tab changes
    return projects;
  }, [activeTab]);

  const nextProject = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!filteredProjects.length) {
    return null;
  }

  const activeProject = filteredProjects[currentIndex];

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="font-semibold tracking-wider uppercase">Our Work</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">Portfolio</h2>
        </div>

        <div className="flex justify-center">
          <Tabs
            selectedKey={activeTab}
            onSelectionChange={(key) => setActiveTab(key as 'Mobile App' | 'Web App')}
            aria-label="Portfolio Tabs"
            variant='underlined'
            classNames={{
              tabList: 'gap-4 sm:gap-8',
              cursor: 'w-full bg-cyan',
              tab: 'text-base sm:text-lg font-medium',
              tabContent: 'group-data-[selected=true]:text-cyan',
            }}
          >
            <Tab key="Mobile App" title="Mobile App" />
            <Tab key="Web App" title="Web App" />
          </Tabs>
        </div>

        <div className="mt-8 md:mt-12">
          {/* Responsive Carousel */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative h-64 md:h-[450px] flex-shrink-0 w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          {activeProject && (
            <div className="max-w-4xl mx-auto mt-6 md:mt-8 text-left p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 order-2 sm:order-1">
                  {activeProject.title}
                </h4>
                <div className="flex items-center gap-2 sm:gap-3 order-1 sm:order-2 self-end sm:self-center">
                  <button
                    onClick={prevProject}
                    className={`w-10 h-10 rounded-full text-white bg-navbg flex items-center justify-center transition-opacity ${
                      currentIndex === 0 ? ' cursor-not-allowed' : ''
                    }`}
                    aria-label="Previous Project"
                    disabled={currentIndex === 0}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className={`w-10 h-10 rounded-full text-white bg-navbg flex items-center justify-center transition-opacity ${
                      currentIndex === filteredProjects.length - 1 ? ' cursor-not-allowed' : ''
                    }`}
                    aria-label="Next Project"
                    disabled={currentIndex === filteredProjects.length - 1}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl">{activeProject.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                {activeProject.technologies.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium  bg-navbg text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}