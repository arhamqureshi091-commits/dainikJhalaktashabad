import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static deployment
  output: 'export',
  images: {
    unoptimized: true,
  },
  
  // Your existing configurations
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;