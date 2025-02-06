'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { syne } from '../../_lib/fonts';	
export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('sent');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="pt-16 pb-24 flex flex-col">
      <h1 className={`mb-2 text-3xl font-semibold tracking-tight ${syne.className}`}>
        {t('title')}
      </h1>
      <p className='text-lg font-inter text-neutral-600 dark:text-neutral-50 mb-8'>{t('description')}</p>

      <form onSubmit={handleSubmit} className="max-w-lg w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-inter mb-2 text-neutral-600 dark:text-neutral-200">
          {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:gray-200 font-inter"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-inter mb-2 text-neutral-600 dark:text-neutral-200">
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:gray-200 font-inter"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-inter mb-2 text-neutral-600 dark:text-neutral-200">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 rounded-lg border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:gray-200 font-inter resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="text-white bg-black dark:bg-neutral-700 px-6 py-2 rounded-lg font-inter hover:bg-neutral-900 hover:dark:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          {status === `${t('sending')}` ? `${t('sending2')}` : t('send')}
        </button>

        {status === 'sent' && (
          <p className="mt-4 text-green-500 font-inter text-sm">{t('sent')}</p>
        )}
      </form>
    </section>
  );
}
