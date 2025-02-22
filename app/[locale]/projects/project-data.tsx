// types/project.ts
export interface Project {
  id: string; // adicionando id para referência nas traduções
  year: number;
  github: string;
  badgeColor: string;
  website: string;
}

// data/projects.ts
export const projectsDom: Project[] = [
  {
    id: 'tattoo-shop',
    badgeColor: 'secondary',
    year: 2025,
    github: "https://github.com/if-romario/mp-tattoo-shop-website-com-next-js",
    website: "https://tattoo-shop-website-com-next-js.vercel.app",
  },
  {
    id: 'book-scanner',
    year: 2024,
    badgeColor: 'destructive',
    github: "https://github.com/if-romario/libris-tracker-app",
    website: "#",
  },
];
