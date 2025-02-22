import Link from "next/link";
import { syne } from "../_lib/fonts";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { useTranslations } from 'next-intl';

export default function CallToAction() {
	const t = useTranslations('callToAction');
	return (
		<section className="border dark:border-zinc-800 p-6 rounded-md mt-20 grid gap-2">
			<h2 className={`${syne.className} font-bold text-2xl sm:text-3xl`}>{t('title')}</h2>
			<p className="text-zinc-600 text-base sm:text-lg text-balance max-w-3xl mb-5">{t('description')}</p>
			<Link href="https://wa.me/5547992169505?text=Oi%2C%20pode%20me%20ajudar%3F" target="_blank">
				<Button className="dark:bg-white dark:text-black dark:hover:bg-white/60 bg-black text-white hover:bg-black/90" size={'default'} variant={'secondary'}>
					{t('button')} <FaWhatsapp />
				</Button>
			</Link>
		</section>
	);
}