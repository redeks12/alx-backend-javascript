export default function createIteratorObject(report) {
  const arr = [];
  for (const employee of Object.keys(report.allEmployees)) {
    arr.push(...report.allEmployees[employee]);
  }
  return arr
}
