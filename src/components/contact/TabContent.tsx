"use client";
import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import locations from "@/json/location.json";
import ComingSoon from "./ComingSoon";
import PakistanImageMap from "./PakistanImageMap";
import PakistanTextContent from "./PakistanTextContent";



export default function TabContent() {
  const [selectedTab, setSelectedTab] = useState("pakistan");

  

  return (
    <>
      {/* Top Hero Section (Dark Background) */}
      <div className="bg-navbg py-30">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Tabs
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key as string)}
            variant="underlined"
  
            aria-label="Location Tabs"
            classNames={{
              base: "text-white",
              tab: "text-sm font-medium text-white pb-2 data-[selected=true]:border-b-2 data-[selected=true]:border-white ",
              tabList: "flex gap-6 lg:gap-10 ",
              tabContent: "  px- lg:px-12 text-whit group-data-[selected=true]:text-white   ",
              cursor: "hidden",
              panel: "text-white" 
              
            }}
          >
            {locations.map((loc) => (
              <Tab key={loc.id} title={loc.label}>
                {loc.id === "pakistan" ? (
                  <PakistanTextContent location={loc} />
                ) : (
                  <ComingSoon />
                )}
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Image and Map Section (Below Hero) */}
      {selectedTab === "pakistan" && (
        <PakistanImageMap location={locations.find(loc => loc.id === "pakistan")!} />
      )}
    </>
  );
}