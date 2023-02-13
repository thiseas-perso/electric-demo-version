/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'cdn.imagin.studio'],
  },
};

module.exports = nextConfig;
