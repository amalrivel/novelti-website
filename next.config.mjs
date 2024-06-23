/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/novelti-website",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/my-loader.ts",
  },
};

export default nextConfig;
