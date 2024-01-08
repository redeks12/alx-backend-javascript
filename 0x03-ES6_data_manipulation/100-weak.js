export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const data = weakMap.get(endpoint);
    if (data >= 4) {
      throw new Error("Endpoint load is high");
    }

    weakMap.set(endpoint, data + 1);
  } else weakMap.set(endpoint, 1);
}
