export const toBase64 = (payload: string | Uint8Array): string => Buffer.from(payload).toString("base64");
export const fromBase64 = (str: string): Buffer => Buffer.from(str, "base64");
