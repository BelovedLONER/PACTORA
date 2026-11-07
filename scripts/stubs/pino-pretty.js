// Stub for pino-pretty module
// Pulled in by @walletconnect/logger but not needed in client code.
module.exports = function pinoPretty() {
  return function (stream) {
    return stream;
  };
};
