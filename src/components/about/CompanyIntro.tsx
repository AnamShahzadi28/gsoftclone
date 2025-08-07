
import AnimatedOnScroll from '@/utils/AnimatedOnScroll';
import Image from 'next/image';

const CompanyIntro = () => {
  return (
    <AnimatedOnScroll>
    <section className=" px-20 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-12 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
            <p className="text-black ">
              Work with the Tech Leader.
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl  font-light  text-black ">
              Software Development Company | Global Software Consulting
            </h1>
            <p className="mt-6  text-[#555555] leading-relaxed">
              Welcome to GSoft! A Leading software development company who is providing modern software solutions and specialized services of Front-End, Back-End and Mobile-App Development along with Open AI and many more. We bring revolution and digital transformation to the journey of your success by excelling various industries and businesses. By staying consistent with cutting-edge technologies and methodologies with a team of 100+ skilled experts, we strive to innovate your growing business model to boost its success and assure 24/7 availability for timely and 100% satisfying customer support. So, be our Partner for highly accountable and reliable Results...
            </p>
          </div>

          {/* Right Column: Image Content */}
          <div className=" hidden w-full md:w-1/2 mt-8 md:mt-0 lg:block">
            <Image
              src="/images/about/person.png"
              alt="A professional working on a computer in a modern office"
              width={200}
              height={200}
              className="h-[450px]  w-full  object-cover overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
    </AnimatedOnScroll>
  );
};

export default CompanyIntro;