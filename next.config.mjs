/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/novelti-website",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
