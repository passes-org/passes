/// <reference types="@passes/types" />

import { PassesABI } from "@passes/types";

export type Codec<T> = {
  encode: (value: T) => Uint8Array;
  decode: (bytes: Uint8Array) => T;
}

export type RequestResult<TResult> = 
  | { status: 'accepted'; result: TResult }
  | { status: 'rejected' }
  | { status: 'unsupported' }
  | { status: 'exception'; message: string };

export const identityCodec: Codec<any> = {
  encode: (v) => v,
  decode: (v) => v,
}

export class RequestBuilder<TRequest, TResult> {
  abi: PassesABI;
  requestCodec: Codec<TRequest>;
  resultCodec: Codec<TResult>;

  constructor(
    requestCodec: Codec<TRequest>,
    resultCodec: Codec<TResult>,
    abi?: PassesABI
  ) {
    const _abi = abi ?? document.passes;
    if (!_abi) throw new ErrorPassesABINotAvailable();
    this.abi = _abi;

    this.requestCodec = requestCodec;
    this.resultCodec = resultCodec;
  }

  async request(req: TRequest): Promise<RequestResult<TResult>> {
    const requestBytes = this.requestCodec.encode(req);
    if (requestBytes.at(0) !== 0x00) throw new ErrorRequestEnvelopeVersionUnsupported();
    const resultBytes = await this.abi.request(requestBytes);
    const resultStatusByte = resultBytes.at(0);
    switch (resultStatusByte) {
      // Accepted
      case 0x00:
        const result = this.resultCodec.decode(resultBytes);
        return { status: 'accepted', result };
      
      // Rejected
      case 0x01:
        return { status: 'rejected' };

      // Unsupported
      case 0x02:
        return { status: 'unsupported' };

      // Exception:
      case 0x03:
        const message = new TextDecoder().decode(resultBytes.slice(1));
        return { status: 'exception', message };

      default:
        return { status: 'exception', message: `Unexpected result status byte value: ${resultStatusByte}` };
    }
  }
}

export class ErrorRequestEnvelopeVersionUnsupported extends Error {
  name = 'Pass Request Envelope Version Unsupported';
  message = 'Only request envelope version 0x00 is supported'
}

export class ErrorPassesABINotAvailable extends Error {
  name = 'Passes ABI not available';
  message = 'A value for `abi` must be passed to RequestBuilder if `document.passes` is not set'
}