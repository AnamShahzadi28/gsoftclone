export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  features?: string[]
}

export interface SharedHeroProps {
  title: string;
  subtitle?: string;
  isBlogPage?: boolean;
  
}

export interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export interface PortfolioCardProps {
  project: PortfolioProject;
}

export interface PortfolioDetailContentProps {
  project: PortfolioProject;
}



// Interface for the resolved params object
interface PortfolioPageParams {
  slug: string;
}

// Props for the page component, noting that params is a Promise
 export interface PortfolioDetailPageProps {
  params: Promise<PortfolioPageParams>;
}