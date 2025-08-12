export interface BlogSection {
  type: string;
  content: string;
}

export interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  publish_date: string;
  tags: string[];
  sections: BlogSection[];
}



 export interface BlogCardProps {
  post: Blog; // Use the imported Blog type
}



 export interface BlogPostContentProps {
  blog: Blog; // Use the imported Blog type
}


export interface SidebarProps {
  posts: Blog[];
  onSearchChange?: (query: string) => void; // Made optional
}





// Interface for the resolved params object
interface BlogPageParams {
  slug: string;
}

// Props for the page component, noting that params is a Promise
 export interface BlogDetailPageProps {
  params: Promise<BlogPageParams>;
}