// Workers Static Assets may return the complete file for Range requests.
// Preserve seeking in the existing players without changing the media files.
export async function serveMedia(request: Request, assets: Fetcher) {
  const response = await assets.fetch(request);
  const range = request.headers.get("Range");
  if (request.method !== "GET" || !range || response.status !== 200) return response;
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  if (!match || (!match[1] && !match[2])) return response;
  const ifRange = request.headers.get("If-Range");
  if (ifRange && ifRange !== response.headers.get("ETag") &&
      ifRange !== response.headers.get("Last-Modified")) return response;

  const bytes = await response.arrayBuffer();
  const size = bytes.byteLength;
  const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  const headers = new Headers(response.headers);
  headers.set("Accept-Ranges", "bytes");
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start > end || start >= size) {
    headers.set("Content-Range", `bytes */${size}`);
    headers.set("Content-Length", "0");
    return new Response(null, { status: 416, headers });
  }
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(bytes.slice(start, end + 1), { status: 206, headers });
}
