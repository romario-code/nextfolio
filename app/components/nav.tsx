import { Link } from "@/i18n/routing";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../[locale]/config";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuIcon } from "lucide-react";

import { syne, inter } from "../_lib/fonts";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar({ name }: { name: string }) {
  const t = useTranslations("Navbar");
  const navItems = {
    "/projects": { name: t("project") },
    "/about": { name: t("about") },
  };
  return (
    <div className="flex justify-between flex-wrap items-center mt-4 container">
      <Link
        href="/"
        className={`inline-flex text-3xl font-semibold tracking-tight hover:bg-accent hover:text-accent-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-1 font-syne ${syne.className}`}
      >
        {metaData.logoText}
      </Link>
      <div className="menuMobile flex items-center gap-2 md:hidden">
        <div className="flex gap-2 items-center">
          <ThemeSwitch />
          <LanguageSwitcher />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon
              size={38}
              className="flex flex-col items-center gap-2 font-heading text-lg md:hidden"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4">
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start">
              {Object.entries(navItems).map(([path, { name }]) => (
                console.log('tetse', path),
                <Link
                  key={path}
                  href={path as "/" | "/en" | "/pt"}
                  className="uppercase text-neutral-600 dark:text-neutral-300 flex flex-col items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground justify-start text-sm p-2 px-4"
                >
                  {name}
                </Link>
              ))}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="mt-1 sm:mt-0 overflow-scroll md:overflow-auto hidden md:flex">
        <div className="flex items-center justify-between">
          <div className="flex-row md:ml-auto items-center overflow-scroll sm:overflow-auto">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path as "/" | "/en" | "/pt"}
                className={`uppercase text-neutral-600 dark:text-neutral-300 inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground pt-2 pb-2 pr-4 pl-1 h-9 sm:px-5 sm:py-2 justify-start text-xs ${inter.className}`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <ThemeSwitch />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
