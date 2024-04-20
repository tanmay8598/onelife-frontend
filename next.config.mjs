/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "s3.ap-southeast-1.amazonaws.com",
      "images.pexels.com",
      "mmhscrollsell.s3.ap-south-1.amazonaws.com",
    ],
  },
  trailingSlash: true,
  // output: "export",
};

export default nextConfig;
