/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  transpilePackages: ["@rainbow-me/rainbowkit"],
  webpack: (config) => {
    // Alias for compatibility shims applied by postinstall script
    config.resolve.alias["ts-interface-checker"] = require("path").resolve(
      __dirname,
      "node_modules/ts-interface-checker/dist/index.js"
    );
    return config;
  },
};

module.exports = nextConfig;
