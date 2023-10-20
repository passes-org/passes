/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

declare global {
  interface Document {
    passes?: PassesABI;
  }
}
