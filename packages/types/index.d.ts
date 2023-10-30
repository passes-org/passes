/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

export interface DocumentWithPasses extends Document {
	passes?: PassesABI; // defined if supported (i.e. if extension is installed or fallback JS script has run)
}

export interface PassesABI {
	/** Request the user to complete a pass request */
	request(
		/** The raw pass request bytes */
		raw: Uint8Array
	): Promise<Uint8Array>;
}

/** The result of a request call, sent from a pass engine to a relying party via `postMessage` */
export type RequestResult = {
	type: 'request-result';
	result: Uint8Array;
};

declare global {
  interface Document {
    passes?: PassesABI;
  }
}
