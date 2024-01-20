import { type AstroCookies } from "astro";

const PASS_PROVIDER_COOKIE_NAME = 'user_pass_provider';

/**
 * Returns the URI of the user's pass provider, if it's set.
 */
export function getUserPassProvider({ cookies }: { cookies: AstroCookies }): string | undefined {
  return cookies.get(PASS_PROVIDER_COOKIE_NAME)?.value
}

/**
 * Sets the URI of the user's pass provider.
 */
export function setUserPassProvider({ cookies }: { cookies: AstroCookies }, uri: string): void {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 10);
  cookies.set(PASS_PROVIDER_COOKIE_NAME, uri, { sameSite: 'none', path: '/', expires, secure: true, httpOnly : true});
}

/**
 * Deletes the user pass provider cookie.
 */
export function clearUserPassProvider({ cookies }: { cookies: AstroCookies }): void {
  cookies.delete(PASS_PROVIDER_COOKIE_NAME, { path: '/' })
}