export interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
}

export interface ServiceSection {
  title: string;
  description: string;
  image: string;
  bullets: string[];
}

export interface ServiceDetailPage {
  hero: Omit<ServiceHeroProps, 'title'>; 
  sections: ServiceSection[];
}

export interface Service {
  id: number;
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  detailPage: ServiceDetailPage;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface CoreValuesData {
  left: CoreValue[];
  right: CoreValue[];
}


// Interface for the resolved params object
interface ServicePageParams {
  slug: string;
}

// Props for the page component, noting that params is a Promise
 export interface ServiceDetailPageProps {
  params: Promise<ServicePageParams>;
}



