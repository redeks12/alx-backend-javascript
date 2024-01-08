export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length, position, value);
  const Intt = new Int8Array(buffer);
  Intt[position] = value;
  return buffer;
}
