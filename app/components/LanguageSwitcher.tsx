'use client';
// import { useState } from 'react';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import React, { useState, useEffect } from 'react';


import { Switch } from "@/components/ui/switch"

type Locale = 'en' | 'pt';

export default function LocaleSwitcher() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();
	const [isPortuguese, setIsPortuguese] = useState(false);
	const currentLocale = params.locale as Locale;

	// Sincroniza o estado inicial com o locale atual
	useEffect(() => {
		setIsPortuguese(params.locale === 'pt');
	}, [params.locale]);

	const toggleLocale = () => {
		const nextLocale = currentLocale === 'en' ? 'pt' : 'en';
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	};

	return (
		<button
			onClick={toggleLocale}
			disabled={isPending}
			className={clsx(
				'relative inline-flex items-center h-6 rounded-full w-11 bg-gray-700',
				isPortuguese && 'bg-gray-500',
				isPending && 'opacity-50'
			)}
		>
			<span className="sr-only text-white">
				Switch to {isPortuguese ? 'English' : 'Portuguese'}
			</span>
			<span
				className={clsx(
					'inline-block h-4 w-4 transform rounded-full bg-white transition',
					isPortuguese ? 'translate-x-6' : 'translate-x-1'
				)}
			/>
			<span
				className={clsx(
					'absolute text-xs font-medium',
					isPortuguese ? 'left-1.5 text-white' : 'right-1.5 text-white'
				)}
			>
				{isPortuguese ? 'PT' : 'EN'}
			</span>
		</button>
	);
}