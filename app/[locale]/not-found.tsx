import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
export const metadata: Metadata = {
  title: '404',
  description: 'Error 404',
};

export default function NotFound() {
  return (
    <section className="flex items-center flex-col h-[calc(100vh-224px)] justify-between content-between">
      <div>
        <h1 className="font-medium text-2xl mb-8 tracking-tight">
          404 - Page not found
        </h1>
        <p>Oops! The page you're looking for doesn't seem to exist.</p>
        <Link href="/" className="flex items-center mt-8 text-sm">
          <Button className="mt-5 text-xs" variant="outline">
            <ArrowLeft />
            Entre em contato
          </Button>
        </Link>
      </div>
    </section>
  );
}
