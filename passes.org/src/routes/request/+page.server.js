import { getUserPassProvider } from "$lib/userPassProvider.server";
import { redirect } from "@sveltejs/kit";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { parseRequestTag } from "../../../../packages/reqs";
import { ServerTransportCodec } from "./SpringBoard/ServerTransportCodec";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const { request } = await RequestBodySchema.parseAsync(await event.request.formData());
    const referrerValue = event.request.headers.get('referer');
    const referrer = referrerValue ? new URL(referrerValue).host : undefined;
    
    const userPassProvider = getUserPassProvider(event);
    if (userPassProvider) throw redirect(302, userPassProvider);

    return {
      referrer,
      requestBase64Url: ServerTransportCodec.encode(request),
      requestTag: parseRequestTag(request),
    };
  }
};

const RequestBodySchema = zfd.formData({
  request: zfd.file()
    .transform(async (file) => new Uint8Array(await file.arrayBuffer()))
    .pipe(z.instanceof(Uint8Array)),
});
