export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof length !== "number") {
      throw new TypeError("length must be a number");
    } else if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    } else if (!Array.isArray(students)) {
      throw new TypeError("students must be an array");
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  set name(newname) {
    if (typeof newname !== "string") {
      throw new TypeError("name must be a string");
    }
    this._name = newname;
  }

  get length() {
    return this._length;
  }
  set length(length) {
    if (typeof length !== "number") {
      throw new TypeError("length must be a number");
    }
    this._length = length;
  }
  get students() {
    return this._students;
  }
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError("students must be an array");
    }
    this._students = students;
  }
}
