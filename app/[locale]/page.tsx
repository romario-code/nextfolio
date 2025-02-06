import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { syne, inter } from '../_lib/fonts';

export default function Page() {
  const t = useTranslations('HomePage');
  return (
    <section className="container flex flex-col justify-center h-[70vh] md:h-[calc(100vh-120px)]">
      <div>
     <div>
     </div>
        <span className={`text-base font-bold text-stone-400 ${syne.className}`}>Romário de Jesus dos Santos</span>
        <h1 className={`text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-3 ${syne.className}`}>
        {t('title')}
        </h1>
        <h2 className={`text-1xl font-bold dark:text-neutral-50 ${syne.className}`}>Build, Hobby, Learn</h2>
        <Link
          href={{ pathname: "/projects" } as any}
          className={`inline-flex items-center gap-2 font-normal text-base text-neutral-700 dark:text-neutral-300 ${inter.className}`}
        >
          <Button
            className="mt-5 text-sm flex-shrink-0 font-normal"
            variant="outline"
          >
            {t('about-more')}
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
