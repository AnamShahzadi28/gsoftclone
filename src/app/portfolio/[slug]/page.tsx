import { notFound } from 'next/navigation';
import PortfolioDetailContent from '../../../components/portfolio/PortfolioDetailContent';
import SharedHero from '../../../components/portfolio/SharedHero';
import portfolioData from '../../../json/portfoliodata.json';
import { PortfolioDetailPageProps, PortfolioProject } from '../../../types/portfolio'; 

const projects: PortfolioProject[] = portfolioData;



  
  const PortfolioDetailPage = async ({ params }: PortfolioDetailPageProps) => {
    // Await the promise to get the resolved params
    const { slug } = await params;
  
  
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SharedHero title={project.title} />
      {/* Make sure PortfolioDetailContent can handle the project prop */}
      <PortfolioDetailContent project={project} />
    </>
  );
};


// Optional but recommended: Generate static pages for better performance
export async function generateStaticParams() {
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }


export default PortfolioDetailPage;