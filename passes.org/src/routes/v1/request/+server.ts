import { getUserPass } from "$lib/server/UserPassCookie";
import { redirect, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async (event) => {
  const userPass = getUserPass(event);
  if (userPass) {
    throw redirect(307, `${userPass}`)
  }

  return new Response('Please sign into your pass');
};
