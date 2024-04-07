/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['reviewshub-back-staging.s3.amazonaws.com'],
  },
};

export default nextConfig;
