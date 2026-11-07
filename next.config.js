/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  transpilePackages: ["@rainbow-me/rainbowkit"],
  webpack: (config) => {
    const stubsDir = path.resolve(__dirname, "scripts/stubs");

    // Alias for compatibility shims / stubs for missing transitive dependencies
    // These modules are pulled in by wagmi/rainbowkit but are server-only or
    // not needed in client-side code.

    // Sucrase/tailwind dependency
    config.resolve.alias["ts-interface-checker"] = path.resolve(
      __dirname,
      "node_modules/ts-interface-checker/dist/index.js"
    );

    // which-typed-array dependencies
    config.resolve.alias["get-proto"] = path.resolve(
      stubsDir,
      "get-proto.js"
    );
    config.resolve.alias["call-bind"] = path.resolve(
      stubsDir,
      "call-bind.js"
    );
    config.resolve.alias["es-object-atoms"] = path.resolve(
      stubsDir,
      "es-object-atoms.js"
    );

    // cross-fetch dependency
    config.resolve.alias["whatwg-url"] = path.resolve(
      stubsDir,
      "whatwg-url.js"
    );

    // WalletConnect dependencies
    config.resolve.alias["ws"] = path.resolve(stubsDir, "ws.js");
    config.resolve.alias["encoding"] = path.resolve(
      stubsDir,
      "encoding.js"
    );
    config.resolve.alias["pino-pretty"] = path.resolve(
      stubsDir,
      "pino-pretty.js"
    );

    // Payment modules (server-only, not used in client)
    config.resolve.alias["@base-org/account"] = path.resolve(
      stubsDir,
      "base-org-account.js"
    );
    config.resolve.alias["@coinbase/cdp-sdk"] = path.resolve(
      stubsDir,
      "coinbase-cdp-sdk.js"
    );
    config.resolve.alias["@x402/evm"] = path.resolve(
      stubsDir,
      "x402-evm.js"
    );
    config.resolve.alias["@x402/evm/upto/client"] = path.resolve(
      stubsDir,
      "x402-evm-upto-client.js"
    );

    // MetaMask SDK dependency
    config.resolve.alias["@react-native-async-storage/async-storage"] = path.resolve(
      stubsDir,
      "react-native-async-storage-async-storage.js"
    );

    // TanStack query-core fallback
    config.resolve.alias["@tanstack/query-core"] = path.resolve(
      stubsDir,
      "tanstack-query-core.js"
    );

    return config;
  },
};

module.exports = nextConfig;
