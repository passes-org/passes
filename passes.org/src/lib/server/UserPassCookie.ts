import type { RequestEvent } from "@sveltejs/kit";

const PASS_COOKIE_NAME = 'user_pass';

export function getUserPass({ cookies }: Pick<RequestEvent, 'cookies'>): string | undefined {
  return cookies.get(PASS_COOKIE_NAME);
}

export function setUserPass({ cookies }: Pick<RequestEvent, 'cookies'>, domain: string): void {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 10);

  cookies.set(PASS_COOKIE_NAME, domain, { sameSite: 'lax', path: '/', expires });
}
