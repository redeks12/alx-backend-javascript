export default function getStudentsByLocation(student, city) {
  return student.filter((x) => x.location === city);
}
