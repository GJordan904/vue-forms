/// <reference types="node" />
/**
 * Random Number Generator
 */
export declare function rng(): Buffer;
/**
 * Creates Array of values
 */
export declare function byteToHex(): string[];
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
export declare function bytesToUuid(buf: Buffer): string;
/**
 * Generate UUID
 */
export declare function uuid(): string;
