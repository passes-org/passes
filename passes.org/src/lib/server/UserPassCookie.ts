import type { RequestEvent } from "@sveltejs/kit";

const PASS_PROVIDER_COOKIE_NAME = 'user_pass_provider';

export function getUserPassProvider({ cookies }: Pick<RequestEvent, 'cookies'>): string | undefined {
  return cookies.get(PASS_PROVIDER_COOKIE_NAME);
}

export function setUserPassProvider({ cookies }: Pick<RequestEvent, 'cookies'>, domain: string): void {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 10);

  cookies.set(PASS_PROVIDER_COOKIE_NAME, domain, { sameSite: 'lax', path: '/', expires });
}
