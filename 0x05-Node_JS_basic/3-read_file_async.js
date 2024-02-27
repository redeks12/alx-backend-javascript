const fs = require("fs");
function countStudents(path) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      throw new Error("Cannot load the database");
    }
    const val = data.toString().trim().split("\n");
    val.shift();
    const stt = val.map((line) => {
      return line.trim().split(",");
    });
    const dict = {};

    const fields = new Set(stt.map((x) => x[3]));
    for (const field of fields) {
      dict[field] = [];
    }
    stt.forEach((x) => {
      dict[x[3]].push(x[0]);
    });
    console.log(`Number of students: ${val.length}`);
    Object.keys(dict).forEach((key) => {
      console.log(`Number of students in ${key}: ${dict[key].join(", ")}`);
    });
  });
  return new Promise((resolve) => {
    resolve();
  });
}
module.exports = countStudents;
