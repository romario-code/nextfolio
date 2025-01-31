
import React from 'react';
import type { Metadata } from 'next';
import {useTranslations} from 'next-intl';
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
    <section className="pt-16 pb-40 flex flex-col">
      <h2 className="text-3xl mb-8 font-bold tracking-tight font-syne">
        {t('title')}
      </h2>
      <h3 className='text-2xl mb-4 font-bold tracking-tight font-syne'>{t('salute')} <br /> {t('name')}</h3>
      <p className="font-inter text-lg font-normal text-gray-600 dark:text-gray-300  max-w-3xl">  
        {t('description')}
      </p>

      {/* Skills Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 rounded-lg border border-gray-800 bg-black-700/60 hover:border-gray-500 transition-colors">
              <p className="font-syne font-bold">{skill.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-inter">{skill.category}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
