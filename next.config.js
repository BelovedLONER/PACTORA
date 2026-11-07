/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  transpilePackages: ["@rainbow-me/rainbowkit"],
  webpack: (config) => {
    // Alias for compatibility shims applied by postinstall script
    config.resolve.alias["ts-interface-checker"] = path.resolve(
      __dirname,
      "node_modules/ts-interface-checker/dist/index.js"
    );

    // Stub out unused server-side payment modules pulled in transitively
    // by @wagmi/connectors → @base-org/account → @coinbase/cdp-sdk → @x402/evm
    // These are not used in client-side code and cause missing-dependency errors.
    config.resolve.alias["@base-org/account"] = path.resolve(
      __dirname,
      "scripts/stubs/base-org-account.js"
    );
    config.resolve.alias["@coinbase/cdp-sdk"] = path.resolve(
      __dirname,
      "scripts/stubs/coinbase-cdp-sdk.js"
    );
    config.resolve.alias["@x402/evm"] = path.resolve(
      __dirname,
      "scripts/stubs/x402-evm.js"
    );
    config.resolve.alias["@x402/evm/upto/client"] = path.resolve(
      __dirname,
      "scripts/stubs/x402-evm-upto-client.js"
    );

    return config;
  },
};

module.exports = nextConfig;
