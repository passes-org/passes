import { clearUserPassProvider } from "$lib/userPassProvider";
import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerData } from "./$types";
import { createPlausibleEvent } from "$lib/createPlausibleEvent";

export const load: PageServerData = (event) => {
  const { userPassProvider } = event.locals;
  return { userPassProvider };
};

export const actions: Actions = {
  clearPassProvider: async (event) => {
    // Create a Clear Pass Provider event in Plausible
    event.platform?.context?.waitUntil(createPlausibleEvent({
      name: 'clearPassProvider',
      props: {
        clearPassProvider_from: event.locals.userPassProvider,
      },
      headers: event.request.headers,
      url: event.request.url,
    }));

    // Clear the user's Pass Provider and redirect them to the home page
    clearUserPassProvider(event);
    redirect(302, '/');
  },
}