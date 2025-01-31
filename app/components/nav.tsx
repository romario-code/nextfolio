import { Link } from "@/i18n/routing";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../[locale]/config";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuIcon } from "lucide-react";

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
    "/contact": { name: t("contact") },
    "/about": { name: t("about") },
  };
  return (
    <div className="div flex justify-between flex-wrap items-center mt-4">
      <div className="logo">
        <Link
          href="/"
          className="text-3xl font-semibold tracking-tight hover:bg-accent hover:text-accent-foreground rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-1 font-syne"
        >
          {metaData.logoText}
        </Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MenuIcon
            size={32}
            className="flex flex-col items-center gap-2 font-heading text-lg md:hidden"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex flex-col items-start">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path as "/" | "/en" | "/pt"}
                className="uppercase text-[#8f9ba8] flex flex-col items-start rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground pt-1 pb-1 pr-4 pl-1 h-9 sm:px-5 sm:py-2 justify-start text-xs"
              >
                {name}
              </Link>
            ))}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <nav className="mt-1 sm:mt-0 overflow-scroll md:overflow-auto hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex flex-row md:ml-auto items-center overflow-scroll sm:overflow-auto">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path as "/" | "/en" | "/pt"}
                className="uppercase text-[#8f9ba8] inline-flex items-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground pt-2 pb-2 pr-4 pl-1 h-9 sm:px-5 sm:py-2 justify-start text-xs"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="mx-3">
            <ThemeSwitch />
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
