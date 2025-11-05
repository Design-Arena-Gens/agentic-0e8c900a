/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      // Add commonly used libraries here if needed
    ]
  }
};

export default nextConfig;
