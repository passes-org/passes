/**
 * @typedef RLEConfig
 * @property {1 | 2 | 4} length - The byte-length of the run-length (e.g. 1 = Uint8, 2 = Uint16, 4 = Uint32)
 * @property {number} [offset = +1] - A number to be added to the length (default = 1)
 */

/**
 * @param {Uint8Array} bytes - The bytes to format
 * @param {RLEConfig} config
 * @return {Uint8Array}
 */
export function formatRLE(bytes, config) {
  return new Uint8Array([
    ...formatRunLength(bytes.length, config),
    ...bytes,
  ]);
}

/**
 * @param {Uint8Array} bytes - The bytes to parse the run-length-encoded byte range from
 * @param {number} start - The start index where the run-length begins
 * @param {RLEConfig} config
 * @return {{ range: Uint8Array; remainder: Uint8Array }}
 */
export function parseRLE(bytes, start, config) {
  const runLength = parseRunLength(bytes, start, config);
  const rangeStart = start + config.length;
  const rangeEnd = rangeStart + runLength;
  const range = bytes.slice(rangeStart, rangeEnd);
  const remainder = bytes.slice(rangeEnd);
  return { range, remainder };
}

/**
 * @param {number} runLength
 * @param {RLEConfig} config
 * @returns {Uint8Array}
 */ 
function formatRunLength(runLength, { length, offset = 1 }) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  switch (length) {
    case 1:
      view.setUint8(0, runLength - offset);
      break;
    case 2:
      view.setUint16(0, runLength - offset);
      break;
    case 4:
      view.setUint32(0, runLength - offset);
      break;
  }

  return new Uint8Array(buffer);
}

/**
 * @param {Uint8Array} bytes
 * @param {number} start - The start index where the run-length begins
 * @param {RLEConfig} config
 * @returns {number}
 */ 
function parseRunLength(bytes, start, { length, offset = 1 }) {
  const buffer = bytes.buffer;
  const view = new DataView(buffer);

  switch (length) {
    case 1:
      return view.getUint8(start) + offset;
    case 2:
      return view.getUint16(start) + offset;
    case 4:
      return view.getUint32(start) + offset;
  }
}