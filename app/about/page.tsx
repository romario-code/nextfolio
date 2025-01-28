import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Nextfolio',
};

export default function Projects() {
  return (
    <section className="pt-16 pb-40 flex flex-col h-screen">
      <h1 className="text-3xl mb-4 font-bold tracking-tight font-syne">
        About
      </h1>
      <h2 className='text-2xl mb-4 font-bold tracking-tight font-syne'>Hi, I'm Romário!</h2>
      <p className="font-inter text-lg font-normal text-[#8f9ba8]">
        I'm a Brazilian full-stack developer. I'm currently studying <span className='text-white'>Next.js</span>, <span className='text-white'>TypeScript</span>, <span className='text-white'>React Native</span>, <span className='text-white'>and</span> <span className='text-white'>UI Design</span> at the
        same time. I also enjoy working on <span className='text-white'>personal projects</span>, you can find some of them on my{" "}
        <Link href="/projects" className="underline"><span className='text-white'>projects</span></Link> page.
      </p>
    </section>
  );
}
