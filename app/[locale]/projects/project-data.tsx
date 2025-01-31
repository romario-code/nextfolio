// types/project.ts
export interface Project {
  id: string; // adicionando id para referência nas traduções
  year: number;
  url: string;
}

// data/projects.ts
export const projectsDom: Project[] = [
  {
    id: 'book-scanner',
    year: 2024,
    url: "#",
  },
];