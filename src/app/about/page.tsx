
import HeroSection from "@/components/about/HeroSection";
import OurClients from "@/components/about/OurClients";
import { Metadata } from 'next';
import MissionVisionSection from "@/components/about/MissionVisionSection";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import CompanyIntro from "@/components/about/CompanyIntro";
import StatsCounter from "@/components/about/StatsCounter";

export const metadata: Metadata = {
  title: 'About GSoft Consulting - A Leading Technology Consultancy',
  description: 'GSoft is a software development company that provides modern software solutions and specialized services in Front-End, Back-End, and Mobile-App Development, as well as Open AI.',
};

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
     <CompanyIntro/>
     
     
      <MissionVisionSection />
      <StatsCounter />
      <OurClients />
     
      <Portfolio />
            <Testimonials />
    </div>
  );
};

export default AboutPage;
