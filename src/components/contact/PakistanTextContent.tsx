

import LocationItem from "@/types/contactForm";
const PakistanTextContent = ({ location }: { location: LocationItem }) => (
  <div className="text-center">
    <h2 className="font-medium text-lg md:text-xl mt-2">
      {location.city}
    </h2>
    {location.address && <p className="mt-4 text-lg md:text-xl font-medium">{location.address}</p>}
    {location.phone && <p className="mt-4 text-lg md:text-xl text-white">{location.phone}</p>}
  </div>
);


export default PakistanTextContent;