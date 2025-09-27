const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    // Enable static export for better performance
    optimizePackageImports: ['lucide-react']
  }
};

module.exports = withNextIntl(nextConfig);
