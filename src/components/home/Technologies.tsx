"use client";

import AnimatedOnScroll from '@/utils/AnimatedOnScroll';
import { Tabs, Tab, Card, CardBody } from '@heroui/react';
import Image from 'next/image';

import { TechnologyTabsProps } from '@/types/home';

const Technologies = ({ data }: TechnologyTabsProps) => {
  return (
    <AnimatedOnScroll  once={false}>
    
    <div className="w-full text-center py-16 ">
      <h2 className=" text-3xl md:text-5xl font-bold text-navbg mb-12">Technologies We Work With</h2>
      <Tabs
        aria-label="Technology Tabs"
        items={data}
        variant='underlined'
        classNames={{
          base: "w-full flex justify-center",
          tabList: "flex  justify-start sm:justify-center gap-8 overflow-x-auto",
          tab: "text-sm font-medium transition-all duration-300",
          tabContent: "pb-2 group-data-[selected=true]:text-cyan",
          cursor: "bg-cyan",
          panel: "pt-8 flex justify-center",
        }}

       
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card className="bg-transparent shadow-none border-none">
              <CardBody>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 max-w-xl mx-auto">
                  {item.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                      <p className="font-bold  text-gray-700">{tech.name}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
    </AnimatedOnScroll>
  );
};

export default Technologies;
