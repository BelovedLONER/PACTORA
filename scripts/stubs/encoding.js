// Stub for encoding module
// Pulled in by MetaMask SDK but not needed in client code.
module.exports = {
  convert: function (str, toEncoding, fromEncoding) {
    return Buffer.from(str, fromEncoding || "utf8").toString(toEncoding || "utf8");
  },
  UTF8: "utf8",
  ASCII: "ascii",
  Base64: "base64",
  Hex: "hex",
  TextEncoder:
    typeof TextEncoder !== "undefined"
      ? TextEncoder
      : function () {
          this.encode = (s) =>
            new Uint8Array([...s].map((c) => c.charCodeAt(0)));
        },
  TextDecoder:
    typeof TextDecoder !== "undefined"
      ? TextDecoder
      : function () {
          this.decode = (b) => String.fromCharCode(...b);
        },
};
