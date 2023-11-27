import { base64url } from "jose";

export const ServerTransportCodec = {
  encode: (value: Uint8Array) => base64url.encode(value),
  decode: (raw: string) => base64url.decode(raw),
};
