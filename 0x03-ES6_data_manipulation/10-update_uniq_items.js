export default function updateUniqueItems(item) {
  if (item instanceof Map) {
    for (const els of item) {
      if (els[1] === 1) {
        item.set(els[0], 100);
      }
      return item;
    }
  }
  throw new Error("Cannot process");
}
