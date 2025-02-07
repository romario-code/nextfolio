import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { syne } from '../../_lib/fonts';

import { useTranslations } from 'next-intl';
import { projectsDom } from './project-data';
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { ArrowBigRight, ArrowRight } from 'lucide-react';
import { FaArrowRight, FaGithub } from 'react-icons/fa6';
export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
};

export default function ProjectsList() {
  const t = useTranslations('projectsPage');
  return (
    <section className="pt-16 pb-40 flex flex-col container">
      <h2 className={`mb-8 tracking-tight text-3xl font-bold text-neutral-900 dark:text-neutral-200 ${syne.className}`}>
        {t('projects')}
      </h2>
      <div className="space-y-6">
        {projectsDom.map((project, index) => (
          <div className="flex flex-col">
            <div className="w-full flex flex-col-reverse md:flex-row gap-1 md:gap-0 flex-wrap justify-between items-baseline">
              <div className='flex flex-col gap-2'>
                <h3 className="font-medium text-2xl text-neutral-600 dark:text-neutral-200">
                  {t(`${project.id}.title`)}
                </h3>
                <Badge variant={project.badgeColor as "destructive" | "default" | "secondary" | "outline" | null | undefined} className='flex w-fit justify-center py-1 px-2'>{t(`${project.id}.BadgeStatus`)}</Badge>
              </div>
              <span className="dark:bg-neutral-900 bg-neutral-200 text-neutral-600  py-2 px-4 rounded-md dark:text-neutral-200 tabular-nums text-sm">
                {project.year}
              </span>
            </div>
            <p className="prose prose-neutral pt-3 text-neutral-600 dark:text-neutral-200">{t(`${project.id}.description`)}</p>
            <div className='flex items-center gap-2 mt-2 -ml-2'>
              <Link href={project.website}>
              <Button size={'default'} variant={'secondary'}>
                {t(`${project.id}.github`)} <FaGithub />
                </Button>
              </Link>
              <Link href={project.github}>
                <Button size={'default'} variant={'link'}>
                {t(`${project.id}.link`)} <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}