import { getUserPassProvider } from '$lib';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Set the userPassProvider in the locals object
  event.locals.userPassProvider = getUserPassProvider(event);

  // Continue processing the request
	const response = await resolve(event);
	return response;
};