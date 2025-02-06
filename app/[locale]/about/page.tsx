
import React from 'react';
import type { Metadata } from 'next';
import {useTranslations} from 'next-intl';
import { syne } from '../../_lib/fonts';
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
    <section className="pt-16 pb-40 flex flex-col container">
      <h2 className={`text-3xl mb-8 font-bold tracking-tight text-neutral-600 dark:text-neutral-50 ${syne.className}`}>
        {t('title')}
      </h2>
      <h3 className={`text-2xl mb-4 font-normal text-neutral-600 dark:text-neutral-50 ${syne.className}`}>{t('salute')} <br /> {t('name')}</h3>
      <p className="text-lg font-normal max-w-3xl text-neutral-600 dark:text-neutral-200">  
        {t('description')}
      </p>

      {/* Skills Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 rounded-lg border border-neutral-300 bg-black-700/60 hover:border-neutral-400 transition-colors">
              <h4 className={`font-semibold text-xl text-neutral-900 dark:text-neutral-200 ${syne.className}`}>{skill.name}</h4>
              <p className="text-sm font-normal text-neutral-600 dark:text-neutral-300">{skill.category}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
