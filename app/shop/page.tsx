import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/lib/posts';

export const metadata = {
  title: 'Shop',
  description: 'Nextfolio Shop',
};

export default function Shop() {
  let allBlogs = getBlogPosts();

  return (
    <section className="pt-16 pb-40 flex flex-col h-[calc(100vh-160px)]">
      <h1 className="mb-8 text-3xl font-medium tracking-tight font-syne">
        Shop
      </h1>
      <p>Comming soon</p>
    </section>
  );
}
