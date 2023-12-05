import { base64url } from "jose";

/**
 * @typedef {Object} ServerTransportCodec
 * @property {(value: Uint8Array) => string} encode
 * @property {(raw: string) => Uint8Array} decode
 */

/** @type {ServerTransportCodec} */
export const ServerTransportCodec = {
  encode: (value) => base64url.encode(value),
  decode: (raw) => base64url.decode(raw),
};
