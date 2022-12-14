/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "graph.facebook.com",
      "lh3.googleusercontent.com",
      "storage.googleapis.com",
    ],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
