import Services360 from "@/components/home/360Services";
import HeroSection from "@/components/home/HeroSection";
import Portfolio from "@/components/home/Portfolio";
import Technologies from "@/components/home/Technologies";
import Testimonials from "@/components/home/Testimonials";
import WhoWeAre from "@/components/home/WhoWeAre";
import WorkingProcess from "@/components/home/WorkingProcess";
import technologies from "@/json/technologies.json";



export default function HomePage() {
  return (
    <>
     <div>
      <HeroSection/>
      <WhoWeAre/>
            <Services360/>
     
     
      <Technologies data={technologies} />
          
      <WorkingProcess />
      <Portfolio />
      <Testimonials />
       </div>
     
    </>
  );
}