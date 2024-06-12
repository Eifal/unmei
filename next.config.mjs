/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.freeimages.com',
        pathname: '/365/images/previews/**', // Adjust the pathname as necessary
      },
    ],
  },
};

export default nextConfig;
