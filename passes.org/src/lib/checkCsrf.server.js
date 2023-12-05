import { error, json, text } from '@sveltejs/kit';

/**
 * Returns an error response if the request is a cross-site form submission.
 * @param {Request} request 
 * @returns {Response | undefined}
 */
export function checkCsrf(request) {
  const url = new URL(request.url);

  const forbidden =
    isFormContentType(request) &&
    (request.method === 'POST' ||
      request.method === 'PUT' ||
      request.method === 'PATCH' ||
      request.method === 'DELETE') &&
    request.headers.get('origin') !== url.origin;

  if (forbidden) {
    const crsfError = error(403, `Cross-site ${request.method} form submissions are forbidden`);
    if (request.headers.get('accept') === 'application/json') {
      return json(crsfError.body, { status: crsfError.status });
    }
    return text(crsfError.body.message, { status: crsfError.status });
  }
}

/**
 * Returns whether the request has a content type that matches any of the given types.
 * @param {Request} request 
 * @param  {...string} types 
 * @returns {boolean}
 */
function isContentType(request, ...types) {
	const type = request.headers.get('content-type')?.split(';', 1)[0].trim() ?? '';
	return types.includes(type.toLowerCase());
}

/**
 * Returns whether the request has a content type that matches a form submission request.
 * @param {Request} request 
 * @returns {boolean}
 */
function isFormContentType(request) {
	// These content types must be protected against CSRF
	// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype
	return isContentType(
		request,
		'application/x-www-form-urlencoded',
		'multipart/form-data',
		'text/plain'
	);
}