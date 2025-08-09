import SharedHero from '../../components/portfolio/SharedHero';
import PortfolioGrid from '../../components/portfolio/PortfolioGrid';
import portfolioData from '../../json/portfoliodata.json';
import technologies from "@/json/technologies.json";
import Technologies from "@/components/home/Technologies";



const PortfolioPage: React.FC = () => {
  return (
    <>
      <SharedHero title="Portfolio" subtitle="Our Work Speaks Itself" />
      <PortfolioGrid projects={portfolioData} />
      <Technologies data={technologies} />
    </>
  );
};

export default PortfolioPage;