import { createPlausibleEvent } from "$lib/createPlausibleEvent";
import { getUserPassProvider } from "$lib/userPassProvider";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async (event) => {
  // Redirect pass requests to the user's Pass Provider, if known
  const userPassProvider = getUserPassProvider(event);
  if (userPassProvider) {
    // Create a passRequestRedirect event in Plausible
    event.platform?.context?.waitUntil(createPlausibleEvent({
      name: 'passRequestRedirect',
      props: {
        passRequestRedirect_to: userPassProvider,
        passRequestRedirect_type: 'user pass provider',
      },
      headers: event.request.headers,
      url: event.request.url,
    }));

    // Redirect the user to their Pass Provider
    return redirect(307, userPassProvider);
  }

  // Redirect pass requests to the request's default provider if one is specified
  const defaultProvider = event.url.searchParams.get("defaultProvider");
  if (defaultProvider) {
    // Create a passRequestRedirect event in Plausible
    event.platform?.context?.waitUntil(createPlausibleEvent({
      name: 'passRequestRedirect',
      props: {
        passRequestRedirect_to: defaultProvider,
        passRequestRedirect_type: 'default provider',
      },
      headers: event.request.headers,
      url: event.request.url,
    }));

    // Redirect the user to the request's default provider
    return redirect(307, defaultProvider);
  }
};
