/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['m.media-amazon.com', 'images-na.ssl-images-amazon.com'],
    unoptimized: false,
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/products',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
