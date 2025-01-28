export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  // {
  //   title: "Landing page LivroSaaS",
  //   year: 2025,
  //   description:
  //     "Projeto de landing page feita com Next.js, Tailwind CSS e TypeScript. O projeto tem como objetivo mostrar uma página de apresentação para venda de livros online. Com sistema de cadastro de usuários e sistema de login.",
  //   url: "#",
  // },
  // {
  //   title: "Análise de SEO para site - em andamento",
  //   year: 2025,
  //   description:
  //     `Projeto feito com Next.js, Tailwind CSS e TypeScript. O projeto tem como objetivo analisar o site para melhorar o SEO de cada cliente. `,
  //   url: "#",
  // },
  {
    title: "App Books Tracker -  Em breve",
    year: 2024,
    description:
      "Scanner de livros feito com React Native, Expo Go e Mysql. O projeto permite criar, ler, atualizar e excluir livros, usando o scanner de barcodes integrado com a api do Google Books.",
    url: "#",
  },
];
