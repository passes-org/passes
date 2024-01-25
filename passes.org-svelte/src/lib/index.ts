import { type RequestEvent } from "@sveltejs/kit";

const PASS_PROVIDER_COOKIE_NAME = 'user_pass_provider';

/**
 * Returns the URI of the user's pass provider, if it's set.
 */
export function getUserPassProvider({ cookies }: RequestEvent): string | undefined {
  return cookies.get(PASS_PROVIDER_COOKIE_NAME);
}

/**
 * Sets the URI of the user's pass provider.
 */
export function setUserPassProvider({ cookies, locals }: RequestEvent, uri: string): void {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 10);
  cookies.set(PASS_PROVIDER_COOKIE_NAME, uri, { sameSite: 'lax', path: '/', expires, secure: true, httpOnly : true});
  locals.userPassProvider = uri;
}

/**
 * Deletes the user pass provider cookie.
 */
export function clearUserPassProvider({ cookies, locals }: RequestEvent): void {
  cookies.delete(PASS_PROVIDER_COOKIE_NAME, { path: '/' })
  locals.userPassProvider = undefined;
}