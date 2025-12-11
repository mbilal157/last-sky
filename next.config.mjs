/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ["**/System Volume Information"],
      };
    }
    return config;
  },
  experimental: {
    turbo: false, // disable Turbopack
  },
};

export default nextConfig;
