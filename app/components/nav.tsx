import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';
import { metaData } from '../config';

const navItems = {
  '/about': { name: 'Sobre' },
  '/projects': { name: 'Projetos' },
  '/articles': { name: 'Articles' },
  '/sobre': { name: 'Sobre' },
};

export function Navbar() {
  return (
    <nav className="py-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-3xl font-semibold tracking-tight hover:bg-accent hover:text-accent-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-1"
          >
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row mt-6 md:mt-0 md:ml-auto items-center overflow-scroll sm:overflow-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="uppercase text-[#8f9ba8] inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-5 py-2 w-full justify-start text-xs"
            >
              {name}
            </Link>
          ))}
          <div className='ml-3'>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
