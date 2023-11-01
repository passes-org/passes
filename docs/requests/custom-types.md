# Custom pass request types

Use `RequestBuilder` from `@passes/reqs`...

Request tags are up to 256 bytes that identify a pass request type. They should be unique, e.g. namespaced to avoid name collision. Tags identify how to interpret the body that follows them in envelope version 0.