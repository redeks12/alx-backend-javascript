export default function appendToEachArrayValue(array, appendString) {
  const new_arr = [];
  for (const idx of array) {
    new_arr.push(appendString + idx);
  }

  return new_arr;
}
