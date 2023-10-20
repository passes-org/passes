/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

export type PassesABI = {
  request: (req: Uint8Array) => Promise<Uint8Array>;
};
