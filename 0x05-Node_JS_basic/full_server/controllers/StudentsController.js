const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString())
      .then((x) => {
        response.set("Content-type", "text/plain");
        const out = [];
        out.push("This is the list of our students");
        const keys = Object.keys(x);
        keys.sort();
        keys.forEach((key) =>
          out.push(
            `Number of students in ${key}: ${x[key].length}. List: ${x[
              key
            ].join(", ")}`
          )
        );
        response.status(200).send(out.join("\n"));
      })
      .catch((err) => response.status(500).send("Cannot load the database"));
  }

  static getAllStudentsByMajor(request, response) {
    const major = ["CS", "SWE"];
    const val = request.params.major;
    response.set("Content-type", "text/plain");
    if (!major.includes(val)) {
      response.status(500).send("Major parameter must be CS or SWE");
    }
    readDatabase(process.argv[2].toString())
      .then((x) => {
        const elemsx = `List: ${x[val].join(", ")}`;

        response.status(200).send(elemsx);
      })
      .catch((err) => {
        response.status(500).send("Cannot load the database");
      });
  }
}
module.exports = StudentsController;
