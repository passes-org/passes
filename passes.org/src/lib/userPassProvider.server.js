const PASS_PROVIDER_COOKIE_NAME = 'user_pass_provider';

/**
 * Returns the URI of the user's pass provider, if it's set.
 * @param {Pick<import("@sveltejs/kit").RequestEvent, 'cookies'>} event
 * @returns {string | undefined}
 */
export function getUserPassProvider({ cookies }) {
  return cookies.get(PASS_PROVIDER_COOKIE_NAME);
}

/**
 * Sets the URI of the user's pass provider.
 * @param {Pick<import("@sveltejs/kit").RequestEvent, 'cookies'>} event
 * @param {string} uri
 * @returns {void}
 */
export function setUserPassProvider({ cookies }, uri) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 10);

  cookies.set(PASS_PROVIDER_COOKIE_NAME, uri, { sameSite: 'lax', path: '/', expires });
}
