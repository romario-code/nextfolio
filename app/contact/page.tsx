import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/lib/posts';

export const metadata = {
  title: 'Contact',
  description: 'Nextfolio Contat',
};

export default function Contact() {
  let allBlogs = getBlogPosts();

  return (
    <section className="pt-16 pb-40 flex flex-col h-screen">
      <h1 className="mb-8 text-3xl font-medium tracking-tight font-syne">
        Contact
      </h1>
    </section>
  );
}
