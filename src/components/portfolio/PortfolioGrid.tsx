"use client"
import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioGridProps, PortfolioProject } from '../../types/portfolio';
import { Tabs, Tab } from "@heroui/react";



const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState<string>('mobile-app'); 

  const categories = [
   
    { id: 'mobile-app', label: 'Mobile App' },
    { id: 'web-app', label: 'Web App' },
  ];

  const filteredProjects = projects.filter((project: PortfolioProject) => {
    return project.category.toLowerCase().replace(/ /g, '-') === activeTab;
  });

  return (
    <section className="container mx-auto px-4 py-12">
      <Tabs
        aria-label="Technology Tabs"
        items={categories}
        variant="light"
        color="danger"
        classNames={{
          base: "w-full flex justify-center ",
          tabList: "flex justify-center gap-4 ",
          tab: `
            text-sm font-semibold px-5 py-6 rounded-full transition-colors
            text-white
            data-[selected=true]:text-white
          `,
          cursor: "bg-navbg rounded-full ",
          tabContent: "py-2",
          panel: "pt-8 flex justify-center ",
        }}
        onSelectionChange={(key) => setActiveTab(key as string)}
      >
        {(tab) => (
          <Tab key={tab.id} title={tab.label}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center"
            
            
          
            >
              {filteredProjects.map((project: PortfolioProject) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>
          </Tab>
        )}
      </Tabs>
    </section>
  );
};

export default PortfolioGrid;
