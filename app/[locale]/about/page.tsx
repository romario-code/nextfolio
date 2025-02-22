
import React from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { syne } from '../../_lib/fonts';
import CallToAction from '@/app/components/CallToAction';
export const metadata: Metadata = {
  title: 'About',
  description: 'About Nextfolio',
};


const skills = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'UI Design', category: 'Design' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'TailwindCSS', category: 'Styling' },
  { name: 'MySql', category: 'Database' }
];

export default function About() {
  const t = useTranslations('about');
  return (
    <section className="pt-16 pb-7 flex flex-col container">
      <h2 className={`text-3xl mb-8 font-bold tracking-tight text-neutral-600 dark:text-neutral-50 ${syne.className}`}>
        {t('title')}
      </h2>
      <h3 className={`text-2xl mb-4 font-bold text-neutral-600 dark:text-neutral-50 ${syne.className}`}>{t('salute')} <br /> {t('name')}</h3>
      <p className="text-sm sm:text-lg font-normal max-w-3xl text-neutral-700 dark:text-neutral-200">
        {t('description')}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4 rounded-md border border-neutral-300 bg-black-700/60 hover:border-neutral-400 transition-colors">
            <h4 className={`font-bold text-xl text-neutral-900 dark:text-neutral-200 ${syne.className}`}>{skill.name}</h4>
            <span className="text-sm font-normal text-neutral-600 dark:text-neutral-900">{skill.category}</span>
          </div> 
        ))}
      </div>
      <CallToAction />
    </section>
  );
}
