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

  function safeViewerImageSource(value) {
    const source = String(value || "").trim();
    const [path, query = "", ...extra] = source.split("?");
    if (extra.length || (query && !/^v=[A-Fa-f0-9]{8,64}$/.test(query))) return null;
    if (path.startsWith("./media/")) {
      const safePath = safeImageSource(path);
      return safePath ? `${safePath}${query ? `?${query}` : ""}` : null;
    }
    if (!path.startsWith("./item-media/")) return null;
    const segments = path.slice("./item-media/".length).split("/");
    if (segments.length < 2 || segments.some((segment) => !SAFE_SEGMENT.test(segment))) return null;
    if (!SAFE_EXTENSION.test(segments.at(-1))) return null;
    return `${path}${query ? `?${query}` : ""}`;
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
      `<button type="button" class="wiki-image-trigger" data-image-viewer-src="${safeSource}" data-image-viewer-alt="${safeAlt}" data-image-viewer-caption="${caption}" aria-label="이미지 크게 보기: ${safeAlt}">` +
      `<img src="${safeSource}" alt="${safeAlt}" loading="lazy" decoding="async">` +
      "</button>" +
      `<figcaption>${caption}</figcaption>` +
      "</figure>"
    );
  }

  return { isImageLine, renderImageLine, safeImageSource, safeViewerImageSource };
});
