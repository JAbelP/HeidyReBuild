/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'heidydelacruz.com',
      },
      {
        protocol: 'https',
        hostname: 'heidyreynoso.wpcomstaging.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: '*.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
      {
        protocol: 'http',
        hostname: '147.93.114.21',
        port: '8000',
      },
    ],
  },
};

export default nextConfig;
