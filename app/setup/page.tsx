import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/lib/posts';

export const metadata = {
  title: 'Setup',
  description: 'Nextfolio Setup',
};

export default function Setup() {
  let allBlogs = getBlogPosts();

  return (
    <section className="pt-16 pb-40 flex flex-col h-screen">
      <h1 className="mb-8 text-3xl font-medium tracking-tight font-syne">
        Setup
      </h1>
      <p>Coming soon</p>
    </section>
  );
}
