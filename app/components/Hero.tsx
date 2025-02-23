import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from '@/i18n/routing';
import { syne, inter } from '../_lib/fonts';
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('HomePage');
    return (
        <section className="container w-full">
            <span className={`text-sm font-bold text-stone-500 dark:text-stone-400 ${syne.className}`}>Romário de Jesus dos Santos</span>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold mb-3 text-balance ${syne.className}`}>
                {t('title')}
            </h1>
            <h2 className={`text-xl font-bold dark:text-neutral-50 capitalize ${syne.className}`}>Build, Hobby, Learn</h2>
            <Link
                href={{ pathname: "/projects" } as any}
                className={`inline-flex items-center gap-2 font-normal text-base text-neutral-700 dark:text-neutral-300 ${inter.className}`}
            >
                <Button
                    className="mt-5 text-sm flex-shrink-0 font-normal capitalize"
                    variant="outline"
                >
                    {t('about-more')}
                    <ArrowRight />
                </Button>
            </Link>
        </section >
    )
}