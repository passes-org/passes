import type { RequestEvent } from "@sveltejs/kit";

const PASS_ENGINE_COOKIE_NAME = 'passes.org/v1/PassEngine';

export function getPassEngine({ cookies }: Pick<RequestEvent, 'cookies'>): string | undefined {
  return cookies.get(PASS_ENGINE_COOKIE_NAME);
}

export function setPassEngine({ cookies }: Pick<RequestEvent, 'cookies'>, domain: string): void {
  cookies.set(PASS_ENGINE_COOKIE_NAME, domain, { sameSite: 'none', path: '/' });
}
