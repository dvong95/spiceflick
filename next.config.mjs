/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextui.org",
        port: "",
        pathname: "images/**",
      },
    ],
  },
};

export default nextConfig;
