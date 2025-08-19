'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Breadcrumb = {
  label: string;
  href: string;
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  // Маппинг путей на понятные названия
  const pathNames = {
    '': 'Главная',
    'page2': 'Страница 2',
    'page-test': 'тестовая страница',
    // добавь свои
  };

  useEffect(() => {
    if (!pathname) return;

    const paths = pathname.split('/').filter((path) => path !== '');

    const crumbs = paths.map((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/');
      const label = pathNames[path as keyof typeof pathNames] || path.charAt(0).toUpperCase() + path.slice(1);

      return { label, href };
    });

    // Добавляем "Главная" в начало
    setBreadcrumbs([{ label: 'Главная', href: '/' }, ...crumbs]);
  }, [pathname]);

  if (breadcrumbs.length <= 1) return null; // не показывать на главной

  return (
    <div className='container mb-12 bg-[#D4D4D8]'>
      <nav className="text-xl font-medium font-inter text-gray-500 mb-4">
        <ol className="flex space-x-1">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              <a
                href={crumb.href}
                className={`hover:underline ${
                  index === breadcrumbs.length - 1 ? 'text-black font-bold' : 'text-gray-600'
                }`}
              >
                {crumb.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}