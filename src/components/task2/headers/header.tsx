// components/headers/header.tsx
'use client';

import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="flex">
      {/* order-b shadow-sm */}
      <header className="w-full "> 
        {isMobile ? 
        <HeaderMobile /> 
        : 
          
        <HeaderDesktop />
        }
      </header>
    </div> 
  );
}