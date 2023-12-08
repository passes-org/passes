import { redirect } from '@sveltejs/kit';
import cheerio from 'cheerio';
import { zfd } from 'zod-form-data';

/** @type {import('@sveltejs/kit').RequestHandler}} */
export async function GET(event) {
  const requestUrl = new URL(event.request.url);
  const { uri } = SearchParamsSchema.parse(requestUrl.searchParams);
  
  // Parse the URL to get the hostname
  const baseUrl = `${uri.protocol}//${uri.hostname}/`;

  // Attempt to parse the favicon URL from
  const html = await (await fetch(baseUrl)).text();
  const $ = cheerio.load(html);
  const faviconHref =
    $('link[rel="apple-touch-icon"]').prop("href") ??
    $('link[rel="icon"]').prop("href") ??
    $('link[rel="shortcut icon"]').prop("href");
  const faviconUrl = faviconHref ? new URL(faviconHref, baseUrl).href : null;
  if (faviconUrl) {
    throw redirect(301, faviconUrl);
  }

  return new Response(createFallbackImage(uri.hostname[0].toUpperCase()), { headers: { 'Content-Type': 'image/svg+xml' } });
}

const SearchParamsSchema = zfd.formData({
  uri: zfd.text()
    .transform((v) => new URL(v)),
});

/**
 * Converts a name to a Data URI for an SVG image.
 * @param {string} name
 * @returns {string}
 */
function createFallbackImage(name) {
  return `<svg viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="black" />
  <text x="32" y="34" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="36" font-family="sans-serif">
    ${name}
  </text>
</svg>`;
}
