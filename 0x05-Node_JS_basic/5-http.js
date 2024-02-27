const http = require("http");
const fs = require("fs");
function countStudents(path) {
  return new Promise((resolve, reject) => {
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
      //   dict["lent"] = val.length;

      const fields = new Set(stt.map((x) => x[3]));
      for (const field of fields) {
        dict[field] = [];
      }
      stt.forEach((x) => {
        dict[x[3]].push(x[0]);
      });

      resolve([dict, val.length]);
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "plain/text" });
  const { method, url } = req;
  if (method === "GET" && url === "/") {
    res.end("Hello Holberton School!");
  } else if (method === "GET" && url === "/students") {
    res.write("This is the list of our students");

    countStudents(process.argv[2])
      .then((resp) => {
        const [x, l] = resp;
        res.write(`\nNumber of students: ${l}`);
        Object.keys(x).forEach((key) => {
          res.write(
            `\nNumber of students in ${key}: ${x[key].length}. List: ${x[key]}`
          );
        });
        res.end();
      })
      .catch((err) => {
        res.statusCode = 404;
        res.end("Cannot load the database");
      });
  }
});

app.listen(1245);
module.exports = app;
