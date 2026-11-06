/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  transpilePackages: ["@rainbow-me/rainbowkit"],
  webpack: (config) => {
    config.resolve.alias["ts-interface-checker"] =
      require("path").resolve(__dirname, "node_modules/ts-interface-checker-stub/index.js");
    return config;
  },
};

module.exports = nextConfig;
