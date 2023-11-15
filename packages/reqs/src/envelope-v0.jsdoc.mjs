/**
 * @template T
 * @typedef {Object} AcceptedResult<T>
 * @property {'accepted'} status - The status of the result when accepted.
 * @property {T} body - The body of the result.
 */

/**
 * @typedef {Object} RejectedResult
 * @property {'rejected'} status - The status of the result when rejected.
 */

/**
 * @typedef {Object} UnsupportedResult
 * @property {'unsupported'} status - The status of the result when unsupported.
 */

/**
 * @typedef {Object} ExceptionResult
 * @property {'exception'} status - The status of the result when there is an exception.
 * @property {string} message - The message explaining the exception.
 */

/**
 * @template TResult
 * @typedef {AcceptedResult<TResult> | RejectedResult | UnsupportedResult | ExceptionResult} RequestResult<TResult>
 */

/**
 * @typedef {'accepted' | 'rejected' | 'unsupported' | 'exception'} ResultStatus
 */
