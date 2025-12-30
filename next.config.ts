import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for production builds to avoid lightningcss issues with public CSS imports
  experimental: {
    turbo: {
      // Keep turbo for dev, but webpack will be used for build
    },
  },
};

export default nextConfig;
