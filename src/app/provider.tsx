'use client'

import { HeroUIProvider } from "@heroui/react";

export function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeroUIProvider labelPlacement="outside" locale="ru-RU">
      {children}
    </HeroUIProvider>
  );
}
