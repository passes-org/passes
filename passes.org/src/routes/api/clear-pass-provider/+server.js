import { clearUserPassProvider } from '$lib/userPassProvider.server';
import { error, text } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler}} */
export async function POST(event) {
  const url = new URL(event.request.url);
  const forbidden = event.request.headers.get('origin') !== url.origin;
  if (forbidden) throw error(403, 'Cross-origin POST not allowed');

  clearUserPassProvider(event);

  return text('OK');
}
