// types/project.ts
export interface Project {
  id: string; // adicionando id para referência nas traduções
  year: number;
  github: string;
  badgeColor: string;
  livePage: string;
  BadgeStatus: string;
  website: string;
}

// data/projects.ts
export const projectsDom: Project[] = [
  {
    id: 'book-scanner',
    year: 2025,
    badgeColor: 'secondary',
    BadgeStatus: 'Em desenvolvimento',
    livePage: '',
    github: "https://github.com/romariojs94/libris-tracker-app",
    website: "#",
  },
  {
    id: 'book-scanner',
    livePage: '',
    badgeColor: 'destructive',
    BadgeStatus: 'Concluído',
    year: 2024,
    github: "https://github.com/romariojs94/libris-tracker-app",
    website: "",
  },
];