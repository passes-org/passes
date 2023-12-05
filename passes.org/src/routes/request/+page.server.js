import { redirect } from "@sveltejs/kit";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { PassProviders, parseRequestTag } from "../../../../packages/reqs";
import { getUserPassProvider } from "../../lib/userPassProvider.server";
import { ServerTransportCodec } from "../../lib/SpringBoard/ServerTransportCodec";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const { request } = await RequestBodySchema.parseAsync(await event.request.formData());
    const referrerValue = event.request.headers.get('referer');
    const referrer = referrerValue ? new URL(referrerValue).host : undefined;

    const requestTag = parseRequestTag(request);
    
    // Redirect any pass request except setPassProvider to the user's pass provider.
    const userPassProvider = getUserPassProvider(event);
    if (userPassProvider && requestTag !== PassProviders.setPassProvider.requestTag) {
      throw redirect(307, userPassProvider);
    }

    return {
      referrer,
      requestBase64Url: ServerTransportCodec.encode(request),
      requestTag,
    };
  }
};

const RequestBodySchema = zfd.formData({
  request: zfd.file()
    .transform(async (file) => new Uint8Array(await file.arrayBuffer()))
    .pipe(z.instanceof(Uint8Array)),
});
