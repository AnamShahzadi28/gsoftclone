"use client";

import Image from "next/image";
import LocationItem from "@/types/contactForm";

const PakistanImageMap = ({ location }: { location: LocationItem }) => (




    <div className="flex flex-row  items-stretch justify-center gap-4  px-5 md:px-0 bg-white">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px]">
        <div className="w-full h-full overflow-hidden">
          {location.image && (<Image
            src={location.image}
            alt={location.city || "Location Image"}
            width={800}
            height={500}
            className="w-full h-full object-cover"
          />)}
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full sm:w-1/2 h-[300px] sm:h-[400px]">
        <div className="w-full h-full  overflow-hidden">
          {location.mapEmbedUrl && (<iframe
            src={location.mapEmbedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>)}
        </div>
      </div>
    </div>
  
);

export default PakistanImageMap;