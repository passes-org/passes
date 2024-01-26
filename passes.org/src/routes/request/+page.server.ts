import { getUserPassProvider } from "$lib/userPassProvider";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async (event) => {
  // Redirect pass requests to the user's Pass Provider, if known
  const userPassProvider = getUserPassProvider(event);
  if (userPassProvider) {
    return redirect(307, userPassProvider);
  }

  // Redirect pass requests to the request's default provider if one is specified
  const defaultProvider = event.url.searchParams.get("defaultProvider");
  if (defaultProvider) {
    return redirect(307, defaultProvider);
  }
};
