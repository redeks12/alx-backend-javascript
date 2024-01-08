export default function hasValuesFromArray(sett, arr) {
  let num = 0;
  sett.forEach((x) => {
    for (const n of arr) {
      if (n === x) num++;
    }
  });
  if (num === arr.length) return true;
  else return false;
}
