import { getUserPassProvider } from "../lib/userPassProvider.server";

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
  return {
    userPassProvider: getUserPassProvider(event),
  };
};