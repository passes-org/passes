/** @type {import('@sveltejs/kit').RequestHandler} */
export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Credentials': 'true',
      'Cross-Origin-Opener-Policy': 'cross-origin',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  });
}
