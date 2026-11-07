import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static deployment
  output: 'export',
  
  // Required because GitHub Pages cannot host the default Next.js Image Optimization API
  images: {
    unoptimized: true,
  },
  
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
