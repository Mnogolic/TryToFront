// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Отключаем Turbopack через experimental
  experimental: {
    
    // Теперь Turbopack управляется через объект
    // Чтобы полностью отключить — просто убери experimental.turbopack
    // или оставь как пустой объект
  },
};

export default nextConfig;
