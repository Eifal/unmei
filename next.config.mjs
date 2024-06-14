/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.freeimages.com',
        pathname: '/365/images/previews/**',
      },
    ],
  },
};

export default nextConfig;
