import { getPassEngine } from "$lib/server/PassEngineCookie";
import { redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async (event) => {
  const passEngine = getPassEngine(event);
  if (passEngine) {
    throw redirect(307, `${passEngine}`)
  }

  return new Response('Please sign into your pass engine');
};
