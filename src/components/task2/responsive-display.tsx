// src/components/task2/responsive-display.tsx
'use client';

import { useMediaQuery } from 'react-responsive';

export default function ResponsiveDisplay() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="p-6 bg-blue-50 rounded-lg">
      <h2 className="text-lg font-semibold">Текущее устройство:</h2>
      <ul>
        <li>📱 Mobile: {isMobile ? '✔️' : '❌'}</li>
        <li>📘 Tablet: {isTablet ? '✔️' : '❌'}</li>
        <li>💻 Desktop: {isDesktop ? '✔️' : '❌'}</li>
      </ul>
    </div>
  );
}