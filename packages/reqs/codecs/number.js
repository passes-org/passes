/**
 * A codec for number request/result bodies.
 * @type {import("../main/request-topic").Codec<number>}
 * @memberof Codecs
 */
const NumberCodec = {
  encode: (value) => {
    const buffer = new ArrayBuffer(4); // Assuming 32-bit numbers
    const view = new DataView(buffer);
    view.setFloat32(0, value, true); // true for little endian
    return new Uint8Array(buffer);
  },
  decode: (bytes) => {
    const buffer = bytes.buffer;
    const view = new DataView(buffer);
    return view.getFloat32(0, true); // true for little endian
  },
};

export { NumberCodec as Number };