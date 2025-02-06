// types/project.ts
export interface Project {
  id: string; // adicionando id para referência nas traduções
  year: number;
  github: string;
  badgeColor: string;
  livePage: string;
  website: string;
}

// data/projects.ts
export const projectsDom: Project[] = [
  {
    id: 'tattoo-shop',
    livePage: '',
    badgeColor: 'secondary',
    year: 2025,
    github: "https://github.com/romariojs94/mp-tattoo-shop-website-com-next-js",
    website: "https://mp-tattoo-shop-website-com-next-js.vercel.app",
  },
  {
    id: 'book-scanner',
    year: 2024,
    badgeColor: 'destructive',
    livePage: '',
    github: "https://github.com/romariojs94/libris-tracker-app",
    website: "#",
  },
];