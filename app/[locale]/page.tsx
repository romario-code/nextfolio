import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { syne, inter } from '../_lib/fonts';

export default function Page() {
  const t = useTranslations('HomePage');
  return (
    <section className="container flex flex-col justify-center h-[70vh] md:h-[calc(100vh-120px)]">
      <div className="">
        <h1 className="text-5xl font-bold tracking-tight mb-3">
          Romário J. Santos
        </h1>
        <h2 className={`text-xl font-semibold dark:text-neutral-50 ${syne.className}`}>
          {t('about')}
        </h2>
        <p className={`text-base mt-1 text-neutral-800 dark:text-neutral-300 font-normal ${inter.className}`}>
          {t('description')}
        </p>
        <Link
          prefetch={false}
          href="mailto:romariojs94@proton.me"
          className={`inline-flex items-center gap-2 font-normal text-base text-neutral-700 dark:text-neutral-300 ${inter.className}`}
        >
          <Button
            className="mt-5 text-sm flex-shrink-0 font-normal"
            variant="outline"
          >
            get in touch
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
}
