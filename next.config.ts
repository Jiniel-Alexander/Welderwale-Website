import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. Enable modern image optimization formats (AVIF & WebP)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // 2. Enable production compression
  compress: true,
  // 3. Power by header removal for security and speed
  poweredByHeader: false,
};

export default nextConfig;
