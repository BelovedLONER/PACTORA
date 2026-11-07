// Stub for whatwg-url module
// Pulled in by cross-fetch but not needed in client code (browser has URL globally).
module.exports = {
  URL: typeof URL !== "undefined" ? URL : null,
  URLSearchParams:
    typeof URLSearchParams !== "undefined" ? URLSearchParams : null,
  parseURL: function (url) {
    try {
      return new URL(url);
    } catch (e) {
      return null;
    }
  },
  serializeURL: function (url) {
    return url ? String(url) : "";
  },
  domainToUnicode: function (domain) {
    return domain || "";
  },
  domainToASCII: function (domain) {
    return domain || "";
  },
};
