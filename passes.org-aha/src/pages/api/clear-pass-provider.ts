import type { APIRoute } from "astro";
import { clearUserPassProvider } from "../../lib/userPassProvider";

export const POST: APIRoute = (context) => {
  const url = new URL(context.request.url);
  const forbidden = context.request.headers.get('origin') !== url.origin;
  
  if (forbidden) return new Response('Cross-origin POST not allowed', { status: 403 });

  clearUserPassProvider(context);

  return new Response('OK', { status: 200, headers: {
    "HX-Refresh": "true"
  } });
}