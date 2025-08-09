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
    <section id="portfolio" className="py-16 bg-white  overflow-hidden px-30">
      <div className="container mx-auto">
        <div className="text-center mb-12 px-4">
          <h3 className=" font-semibold tracking-wider uppercase">Our Work</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Portfolio</h2>
        </div>

        <div className="flex justify-center px-4">
          <Tabs
            selectedKey={activeTab}
            onSelectionChange={(key) => setActiveTab(key as 'Mobile App' | 'Web App')}
            aria-label="Portfolio Tabs"
            variant='underlined'
            classNames={{
              tabList: 'gap-8',
              cursor: 'w-full bg-cyan',
              tab: 'text-lg font-medium',
              tabContent: 'group-data-[selected=true]:text-cyan',
            }}
          >
            <Tab key="Mobile App" title="Mobile App" />
            <Tab key="Web App" title="Web App" />
          </Tabs>
        </div>

        <div className="mt-12">
          {/* Carousel for large screens */}
          <div className="hidden lg:block">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex items-center transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(calc(25% - ${currentIndex * 50}%))` }}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`relative h-[450px] flex-shrink-0 transition-transform duration-500 ease-in-out ${
                      currentIndex === index ? 'scale-100' : 'scale-80 blur-xs'
                    }`}
                    style={{ width: '50%' }}
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
          </div>

          {/* Carousel for small and medium screens */}
          <div className="lg:hidden">
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredProjects.map(project => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="relative h-64 sm:h-80 md:h-96 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          {activeProject && (
            <div className="max-w-4xl w-full mt-8 text-left mx-auto p-4 md:p-8 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 order-2 md:order-1">
                  {activeProject.title}
                </h4>
                <div className="flex items-center gap-3 order-1 md:order-2 self-end md:self-center">
                  {currentIndex > 0 && (
                    <button
                      onClick={prevProject}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full text-white bg-navbg flex items-center justify-center transition-colors"
                      aria-label="Previous Project"
                    >
                      <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  )}
                  {currentIndex < filteredProjects.length - 1 && (
                    <button
                      onClick={nextProject}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full text-white bg-navbg flex items-center justify-center transition-colors"
                      aria-label="Next Project"
                    >
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  )}
                </div>
              </div>
              <p className="mt-4 text-base md:text-lg max-w-2xl">{activeProject.description}</p>
              <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                {activeProject.technologies.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-navbg text-white text-xs md:text-sm font-medium rounded-md"
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
