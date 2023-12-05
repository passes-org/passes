import { checkCsrf } from './lib/checkCsrf.server';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const url = new URL(event.request.url);

  if (url.pathname === '/request' && event.request.method === 'POST') {
    const response = await resolve(event);
    return response;
  }

  return checkCsrf(event.request) ?? resolve(event);
};