import { Codec, RequestBuilder } from ".";
import { EnvelopeV0x00 } from "./envelope-v0x00";

export type SetPassEngineRequestBody = {
	/** The value to be used as the user's pass engine URI */
	uri: string;
	/** A string used to identify the user (their ID, JWT, etc) */
	userkey?: string;
};

const requestTag = 'https://passes.org/v1/set-pass-engine';

const requestCodec: Codec<SetPassEngineRequestBody> = {
  encode: (body) => new Uint8Array([
    ...EnvelopeV0x00.encodeRequestHeader(requestTag),
    ...new TextEncoder().encode(JSON.stringify(body)),
  ]),
  decode: (bytes) => {
    const { tag, body } = EnvelopeV0x00.parseRequest(bytes);
    // FIXME: Verify tag === requestTag
    const bodyText = new TextDecoder().decode(body);
    return JSON.parse(bodyText);
  }
};

const resultCodec: Codec<boolean> = {
  encode: () => new Uint8Array([
    EnvelopeV0x00.encodeResultStatusByte('accepted'),
  ]),
  decode: (bytes) => {
    const { status } = EnvelopeV0x00.parseResult(bytes);
    return status === 'accepted';
  }
};

export const setPassEngine = new RequestBuilder<SetPassEngineRequestBody, boolean>(requestCodec, resultCodec);
