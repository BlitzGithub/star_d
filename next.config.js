/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = {
  images: {
    domains: ["apod.nasa.gov"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};
