/** @type {import('next').NextConfig} */
export default {
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
