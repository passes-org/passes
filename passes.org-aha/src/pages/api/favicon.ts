import type { APIRoute } from "astro";
import cheerio from 'cheerio';
import { zfd } from 'zod-form-data';

export const GET: APIRoute = async (context) => {
    const requestUrl = new URL(context.request.url);
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
      console.log(`Redirecting to ${faviconUrl}`);
      return context.redirect(faviconUrl);
    }
  
    return new Response(createFallbackImage(uri.hostname[0].toUpperCase()), { headers: { 'Content-Type': 'image/svg+xml' } });
    
}

const SearchParamsSchema = zfd.formData({
  uri: zfd.text()
    .transform((v) => new URL(v)),
});
  
function createFallbackImage(name: string) {
    return `<svg viewbox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" fill="black" />
    <text x="32" y="34" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="36" font-family="sans-serif">
      ${name}
    </text>
  </svg>`;
}
  