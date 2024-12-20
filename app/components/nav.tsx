import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';
import { metaData } from '../config';

const navItems = {
  '/projects': { name: 'Projects' },
  '/articles': { name: 'Articles' },
  '/setup': { name: 'Setup' },
  '/shop': { name: 'Shop' },
  '/contact': { name: 'Contact' },
  '/about': { name: 'About' },
};

export function Navbar() {
  return (
    <div className="div flex justify-between items-center">
      {/* // div principal */}
      <div className="logo">
        <Link
          href="/"
          className="text-3xl font-semibold tracking-tight hover:bg-accent hover:text-accent-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-1 font-syne"
        >
          {metaData.logoText}
        </Link>
      </div>
      <nav className="nav">
        <div className="flex items-center justify-between sm:mt-6">
          <div className="flex flex-row md:ml-auto items-center overflow-scroll sm:overflow-auto">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="uppercase text-[#8f9ba8] inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground pt-2 pb-2 pr-4 h-9 sm:px-5 sm:py-2 justify-start text-xs"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="ml-3">
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </div>
  );
}
