import { setUserPassProvider } from "$lib";
import { error, redirect, type Actions } from "@sveltejs/kit";
import { z } from "zod";
import { zfd } from "zod-form-data";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async (event) => {
  const currentProvider = event.locals.userPassProvider;
  const newProvider = event.url.searchParams.get("provider");
  const returnURL = event.url.searchParams.get("return");

  if (!newProvider || !returnURL) {
    error(500, "Missing `provider` or `return` search param");
  }
  
  // If the user is already using the new provider, do not present a confirmation UI
  if (!currentProvider || currentProvider === newProvider) {
    setUserPassProvider(event, newProvider);
    redirect(302, returnURL);
  }

  // Otherwise, present a confirmation UI to confirm the new provider
  return {
    newProvider,
    returnURL,
  };
};

export const actions: Actions = {
  default: async (event) => {
    const FormDataSchema = zfd.formData({
      provider: zfd.text().pipe(z.string().url()),
      return: zfd.text().pipe(z.string().url()),
    });

    const {
      provider: newProvider,
      return: returnURL,
    } = FormDataSchema.parse(await event.request.formData());
  
    if (!newProvider || !returnURL) {
      return new Response("Missing `provider` or `return` form field", { status: 400 });
    }
  
    setUserPassProvider(event, newProvider);
    redirect(302, returnURL);
  },
};
