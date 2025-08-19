// components/headers/header.tsx
'use client';

import { useMediaQuery } from 'react-responsive';
import FooterDesktop from './footer-desktop';


export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex">
      {/* order-b shadow-sm */}
      <header className="w-full "> 
        {isMobile ? 
        <FooterDesktop /> 
        : 
          
        <FooterDesktop />
        }
      </header>
    </div> 
  );
}