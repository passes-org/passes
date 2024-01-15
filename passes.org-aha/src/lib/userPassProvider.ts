import { type APIContext, type AstroGlobal } from "astro";

const PASS_PROVIDER_COOKIE_NAME = 'user_pass_provider';

/**
 * Returns the URI of the user's pass provider, if it's set.
 * @param
 * @returns {string | undefined}
 */

export function getUserPassProvider({ cookies }: AstroGlobal) {
  return cookies.get(PASS_PROVIDER_COOKIE_NAME)?.value
}

/**
 * Sets the URI of the user's pass provider.
 
 * @param {string} uri
 * @returns {void}
 */
export function setUserPassProvider({ cookies }: AstroGlobal, uri: string) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 10);

  cookies.set(PASS_PROVIDER_COOKIE_NAME, uri, { sameSite: 'lax', path: '/', expires });
}

/**
 * Deletes the user pass provider cookie.
 * @returns {void}
 */
export function clearUserPassProvider(astro: APIContext) {
  astro.cookies.delete(PASS_PROVIDER_COOKIE_NAME, { path: '/' })
}