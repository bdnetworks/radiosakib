/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'kendua.github.io' },
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 't3.ftcdn.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
  },
};

module.exports = nextConfig;
