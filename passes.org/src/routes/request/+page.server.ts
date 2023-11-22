import { EnvelopeV0 } from "../../../../packages/reqs";
import type { Actions } from "@sveltejs/kit";
import { z } from "zod";
import { zfd } from "zod-form-data";

export const actions = {
  default: async (event) => {
    const request = await RequestBodySchema.parseAsync(await event.request.formData());
    return { request };
  }
} satisfies Actions;

const RequestBodySchema = zfd.formData({
  request: zfd.file()
    .transform(async (file) => new Uint8Array(await file.arrayBuffer()))
    .pipe(z.instanceof(Uint8Array)),
}).transform(({ request }) => EnvelopeV0.parseRequest(request));
