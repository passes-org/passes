import { redirect } from "@sveltejs/kit";
import { getUserPassProvider } from "../../lib/userPassProvider.server";

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
  const referrerValue = event.request.headers.get('referer');
  const referrer = referrerValue ? new URL(referrerValue).host : undefined;
  
  // Redirect pass requests to the user's Pass Provider
  const userPassProvider = getUserPassProvider(event);
  if (userPassProvider) {
    throw redirect(307, userPassProvider);
  }

  return {
    referrer,
    userPassProvider,
  };
};