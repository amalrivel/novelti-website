/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/novelti-website",
  output: "export",
  images: {
    domains: ["scontent.fcgk40-1.fna.fbcdn.net"], 
//     loader: "custom",
//     loaderFile: "./src/lib/my-loader.ts",
  },
};

export default nextConfig;
