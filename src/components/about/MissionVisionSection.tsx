
import Image from 'next/image';

const MissionVisionSection = () => {
  return (
    <section className="bg-navbg text-white py-16 px-5 lg:px-35">
      <div className="container mx-auto px-4  ">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Our Mission Column */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
                <Image src="/images/about/mission.png" alt="Mission Icon" width={80} height={80} />
            </div>
            <p className="text-white font-semibold">Work with the Tech Leader.</p>
            <h2 className="text-4xl font-bold mt-2">Our Mission</h2>
            <p className="mt-4  ">
            GSoft strives to provide Quality Services of Web Development, Mobile App Development, Custom Software Development, DevOps, QA Testing and UI/UX Designing to startup businesses to grow in this era of digitalization by updating and modernizing their business operations through AI, Machine Learning, and IOT with the help of skilled, qualified and trained Resources. We aim to grow by Networking and believe that “Resources are the keys to the success of a company and Skill is the core value of a Resource”. Though, we intend to empower our employees with rewards, achievements and challenging opportunities for learning.
            </p>
          </div>

          {/* Our Vision Column */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
                <Image src="/images/about/vision.png" alt="Vision Icon" width={80} height={80} />
            </div>
            <p className="text-white font-semibold">What We Aspire To Be</p>
            <h2 className="text-4xl font-bold mt-2 mb-4">Our Vision</h2>
            <p >
            To be leader of IT industry by providing reliable and best IT solutions around the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
