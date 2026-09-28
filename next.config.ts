const nextConfig = {
  output: "standalone" as const,
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
