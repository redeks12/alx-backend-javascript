export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error("Position outside range");
  }
  const buffer = new ArrayBuffer(length, position, value);
  const Intt = new Int8Array(buffer);
  Intt[position] = value;
  return new DataView(buffer);
}
