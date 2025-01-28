
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

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

export default function Projects() {
  return (
    <section className="pt-16 pb-40 flex flex-col">
      <h2 className="text-3xl mb-8 font-bold tracking-tight font-syne">
        About
      </h2>
      <h3 className='text-2xl mb-4 font-bold tracking-tight font-syne'>Hi, <br /> I'm Romário!</h3>
      <p className="font-inter text-lg font-normal text-[#8f9ba8] max-w-3xl">
        I'm a Brazilian full-stack developer. I'm currently studying <span className='text-white'>Next.js</span>, <span className='text-white'>TypeScript</span>, <span className='text-white'>React Native</span>, <span className='text-white'>and</span> <span className='text-white'>UI Design</span> at the
        same time. I also enjoy working on <span className='text-white'>personal projects</span>, you can find some of them on my{" "}
        <Link href="/projects" className="underline"><span className='text-white'>projects</span></Link> page.
      </p>

      {/* Skills Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 rounded-lg border border-gray-800 bg-black-700/60 hover:border-gray-500 transition-colors">
              <p className="font-syne font-bold text-white">{skill.name}</p>
              <p className="text-sm text-[#8f9ba8] font-inter">{skill.category}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
