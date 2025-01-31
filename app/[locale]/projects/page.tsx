import React from 'react';
import type { Metadata } from 'next';


import { useTranslations } from 'next-intl';
import { projectsDom } from './project-data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
};

export default function ProjectsList() {
  const t = useTranslations('projectsPage');
  return (
    <section className="pt-16 pb-40 flex flex-col h-[calc(100vh-120px)]">
      <h1 className="mb-8 tracking-tight text-3xl font-bold font-syne">
        {t('project')}
      </h1>
      <div className="space-y-6">
        {projectsDom.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {t(`${project.id}.title`)}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
              <p>{t(`${project.id}.description`)}</p>
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}