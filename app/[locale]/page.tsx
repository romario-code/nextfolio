import Image from "next/image";
import { socialLinks } from "./config";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

export default function Page() {
  const t = useTranslations('HomePage');
  return (
    <section className="max-w-[90vw] md:max-w-[70vw] mx-auto w-full flex flex-col justify-center h-[70vh] md:h-[calc(100vh-120px)]">
      <div className="max-w-7xl">
        <h1 className="text-5xl font-bold tracking-tight mb-3 font-syne">
          Romário J. Santos
        </h1>
        <h2 className="text-xl font-semibold font-syne">
          {t('about')}
        </h2>
        <p className="text-lg mt-1 text-gray-600  font-inter font-normal">
          {t('description')}
        </p>
        <Link
          prefetch={false}
          href="mailto:romariojs94@proton.me"
          className="inline-flex items-center gap-2"
        >
          <Button
            className="mt-5 text-sm flex-shrink-0 font-inter font-normal"
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
