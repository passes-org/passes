import { text } from "@sveltejs/kit";
import { z } from "zod";
import { setUserPassProvider } from "../../lib/userPassProvider.server";

/** @type {import("./$types").RequestHandler} */
export async function POST(event) {
  const { uri } = RequestBodySchema.parse(await event.request.json());
  
  setUserPassProvider(event, uri);

  return text('OK');
}

const RequestBodySchema = z.object({
  uri: z.string().url(),
});
