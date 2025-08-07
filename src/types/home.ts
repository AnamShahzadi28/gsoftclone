// TypeScript Types
export type TechItem = {
  name: string;
  logo: string; // Path to the logo image
};

export type TabData = {
  id: string; // Unique identifier for the tab
  label: string; // Text to display on the tab button
  technologies: TechItem[]; // Content for the tab panel
};

export type TechnologyTabsProps = {
  data: TabData[];
};

export type PortfolioItem = {
  id: number;
  category: 'Mobile App' | 'Web App';
  image: string;
  title: string;
  description: string;
  technologies: string[];
};

export type Testimonial = {
  text: string;
  company: string;
  logo: string;
};
