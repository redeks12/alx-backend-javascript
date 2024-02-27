const fs = require("fs");
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf-8");
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
      console.log(
        `Number of students in ${key}: ${dict[key].length}. List: ${dict[
          key
        ].join(", ")}`
      );
    });
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}
module.exports = countStudents;
