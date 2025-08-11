

import LocationItem from "@/types/contactForm";
const PakistanTextContent = ({ location }: { location: LocationItem }) => (
  <div className="text-center">
    <h2 className="font-normal text-2xl md:text-3xl">
      {location.city}, {location.label}.
    </h2>
    {location.address && <p className="mt-4 text-lg md:text-xl font-normal">{location.address}</p>}
    {location.phone && <p className="mt-4 text-sm text-white">{location.phone}</p>}
  </div>
);


export default PakistanTextContent;