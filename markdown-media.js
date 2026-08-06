((root, factory) => {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.PACKBOUND_MARKDOWN_MEDIA = api;
})(typeof globalThis !== "undefined" ? globalThis : this, () => {
  "use strict";

  const IMAGE_LINE = /^!\[([^\]]*)\]\((\.\/media\/[^()\s]+)(?:\s+"([^"]*)")?\)\s*$/;
  const SAFE_SEGMENT = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
  const SAFE_EXTENSION = /\.(?:png|jpe?g|webp|gif)$/i;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function safeImageSource(value) {
    const source = String(value || "").trim();
    if (!source.startsWith("./media/")) return null;
    const segments = source.slice("./media/".length).split("/");
    if (segments.length < 3 || segments.some((segment) => !SAFE_SEGMENT.test(segment))) return null;
    if (!SAFE_EXTENSION.test(segments.at(-1))) return null;
    return source;
  }

  function isImageLine(value) {
    return String(value || "").trimStart().startsWith("![");
  }

  function renderImageLine(value) {
    if (!isImageLine(value)) return null;
    const match = String(value).trim().match(IMAGE_LINE);
    if (!match) {
      return '<p class="wiki-image-error">표시할 수 없는 위키 이미지 형식입니다.</p>';
    }

    const [, altText, rawSource, title] = match;
    const source = safeImageSource(rawSource);
    if (!source || !altText.trim()) {
      return '<p class="wiki-image-error">안전하지 않거나 설명이 없는 위키 이미지입니다.</p>';
    }

    const safeSource = escapeHtml(source);
    const safeAlt = escapeHtml(altText.trim());
    const caption = escapeHtml((title || altText).trim());
    return (
      '<figure class="wiki-figure">' +
      `<a href="${safeSource}" target="_blank" rel="noopener" aria-label="원본 이미지 열기: ${safeAlt}">` +
      `<img src="${safeSource}" alt="${safeAlt}" loading="lazy" decoding="async">` +
      "</a>" +
      `<figcaption>${caption}</figcaption>` +
      "</figure>"
    );
  }

  return { isImageLine, renderImageLine, safeImageSource };
});
