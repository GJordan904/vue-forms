/**
 * Random Number Generator
 */
export function rng(): Buffer {
  const rawBytes: Uint8Array = new Uint8Array(16);
  window.crypto.getRandomValues(rawBytes);

  return Buffer.from(rawBytes.buffer);
}

/**
 * Creates Array of values
 */
export function byteToHex(): string[] {
  const bToHex = [];
  for (let i = 0; i < 256; ++i) {
    bToHex[i] = (i + 0x100).toString(16).substr(1);
  }
  return bToHex;
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
export function bytesToUuid(buf: Buffer): string {
  let i = 0;
  const bth = byteToHex();

  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]]).join('');
}

/**
 * Generate UUID
 */
export function uuid(): string {
  const rnds = rng();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  /* tslint:disable-next-line:no-bitwise */
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  /* tslint:disable-next-line:no-bitwise */
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  return bytesToUuid(rnds);
}
