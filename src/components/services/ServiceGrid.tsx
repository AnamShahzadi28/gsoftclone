
import ServiceCard from './ServiceCard';
import servicesData from '@/json/services.json';
import AnimatedOnScroll from '@/utils/AnimatedOnScroll';

const ServiceGrid = () => {


  return (
    <AnimatedOnScroll  once={false}>
      <section className="bg-navbg py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {servicesData.servicesData.map((service) => (
              <div key={service.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedOnScroll>
  );
};

export default ServiceGrid;
