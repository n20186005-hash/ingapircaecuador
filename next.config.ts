import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: {},
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
