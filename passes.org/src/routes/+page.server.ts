import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerData } from "./$types";
import { clearUserPassProvider } from "$lib";

export const load: PageServerData = (event) => {
  const { userPassProvider } = event.locals;
  return { userPassProvider };
};

export const actions: Actions = {
  clearPassProvider: async (event) => {
    clearUserPassProvider(event);
    redirect(302, '/');
  },
}