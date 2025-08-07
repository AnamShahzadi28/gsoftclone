'use client';

import { Card, CardBody, Image } from "@heroui/react";

const clients = [
  { name: "Houze Pk", logo: "/blend.png" },
  { name: "Maroon Studios", logo: "/blend.png" },
  { name: "Omid Life", logo: "/blend.png" },
  { name: "Vival Tech", logo: "/blend.png" },
  { name: "Blend Menu", logo: "/blend.png" },
];

const OurClients = () => {
  return (
    <section className="bg-navbg py-6 px-4 md:px-20">
      <h2 className="my-12 text-left text-4xl lg:text-5xl font-bold text-white">Meet Our Clients</h2>
      <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client, index) => {
          // Custom layout logic for the last two items on large screens
          const customClasses = 
            index === 3 ? 'lg:col-start-1' : 
            index === 4 ? 'lg:col-start-3' : '';

          return (
            <div key={client.name} className={customClasses}>
              <Card className="mx-auto w-full max-w-sm rounded-lg border border-white bg-transparent p-0 lg:p-4">
                <CardBody className="flex flex-row items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full">
                    <Image src={client.logo} alt={`${client.name} Logo`} className="h-auto w-full" />
                  </div>
                  <h3 className="font-bold text-white lg:text-lg">{client.name}</h3>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurClients;