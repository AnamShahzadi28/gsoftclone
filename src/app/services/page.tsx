import ServiceHero from '@/components/services/shared/ServiceHero';
import WhatWeOffer from '@/components/services/WhatWeOffer';
import ServiceGrid from '@/components/services/ServiceGrid';
import WhyChooseUs from '@/components/services/WhyChooseUs';

const ServicesPage = () => {
  return (
    <main>
      <ServiceHero 
        title="Our Services" 
        subtitle="Fast, secure, stunning websites & Web Apps at unbeatable prices."
        backgroundImageUrl="/images/services/bgservice.png" 
      />
      <WhatWeOffer />
      <ServiceGrid />
      <WhyChooseUs />
    </main>
  );
};

export default ServicesPage;
