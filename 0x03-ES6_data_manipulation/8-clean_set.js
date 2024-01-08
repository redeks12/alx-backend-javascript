export default function cleanSet(sett, startString) {
  if (!startString || typeof startString !== "string") return "";
  const arr = [];
  let check = false;
  for (const nm of sett) {
    if (
      typeof nm === "string" &&
      nm.slice(0, startString.length) === startString
    ) {
      arr.push(nm.slice(startString.length));
      check = true;
    }
  }
  if (check) return arr.join("-");
  else return;
}
