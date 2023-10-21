import { setPassEngine } from "$lib/server/PassEngineCookie";
import type { Actions } from "@sveltejs/kit";
import { z } from "zod";
import { zfd } from 'zod-form-data';
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const { url } = SearchParamsSchema.parse(event.url.searchParams);
  // if (new URL(event.request.referrer).hostname === domain) {
  //   throw error(400, 'Cannot use a domain other than the referrer as a pass domain.');
  // }
  return { url };
};

export const actions = {
  default: async (event) => {
    const { url } = FormDataSchema.parse(await event.request.formData());
    setPassEngine(event, url);
    return true;
  },
} satisfies Actions;

const SearchParamsSchema = zfd.formData({
  url: zfd.text(z.string().url()),
});
const FormDataSchema = SearchParamsSchema;
