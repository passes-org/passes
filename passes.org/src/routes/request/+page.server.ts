import type { Actions } from "@sveltejs/kit";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { ServerTransportCodec } from "./SpringBoard/ServerTransportCodec";

export const actions = {
  default: async (event) => {
    const { request } = await RequestBodySchema.parseAsync(await event.request.formData());
    const referrerValue = event.request.headers.get('referer');
    const referrer = referrerValue ? new URL(referrerValue).host : undefined;

    return {
      referrer,
      requestBase64Url: ServerTransportCodec.encode(request),
    };
  }
} satisfies Actions;

const RequestBodySchema = zfd.formData({
  request: zfd.file()
    .transform(async (file) => new Uint8Array(await file.arrayBuffer()))
    .pipe(z.instanceof(Uint8Array)),
});
