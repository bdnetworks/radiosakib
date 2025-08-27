import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ TypeScript build error ইগনোর
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ ESLint build error ইগনোর
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Image settings (সব ডোমেইন থেকে ইমেজ লোড হবে)
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
