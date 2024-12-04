import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects',
};

export default function Projects() {
  return (
    <section className="pt-16 pb-40 flex flex-col h-[calc(100vh-160px)]">
      <h2 className="text-3xl mb-4 font-bold tracking-tight font-syne">
        Sobre
      </h2>
      <p className="font-inter text-sm font-normal text-[#8f9ba8]">Em breve</p>
    </section>
  );
}
