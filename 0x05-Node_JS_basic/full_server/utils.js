const fs = require("fs");

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }
      const val = data.toString().trim().split("\n");
      val.shift();
      const strs = val.map((st) => st.trim().split(","));
      const dict = {};
      const fields = new Set(strs.map((field) => field[3]));
      for (const field of fields) {
        dict[field] = [];
      }
      strs.forEach((st) => dict[st[3]].push(st[0]));
      resolve(dict);
    });
  });
}

module.exports = readDatabase;
