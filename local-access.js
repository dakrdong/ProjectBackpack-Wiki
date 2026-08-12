((root) => {
  "use strict";

  function normalizeHostname(value) {
    return String(value || "")
      .trim()
      .toLocaleLowerCase("en-US")
      .replace(/^\[|\]$/g, "")
      .replace(/\.$/, "");
  }

  function isLocalHost(hostname) {
    const normalized = normalizeHostname(hostname);
    return normalized === "localhost" || normalized === "127.0.0.1" || normalized === "::1";
  }

  function shouldShowExactTimestamps(hostname) {
    return isLocalHost(hostname);
  }

  const api = { isLocalHost, shouldShowExactTimestamps };
  root.PACKBOUND_LOCAL_ACCESS = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
