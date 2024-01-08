export default function updateStudentGradeByCity(students, city, grades) {
  const studentsLoc = students.filter((x) => x.location === city);

  studentsLoc.forEach((x) => (x.grade = "N/A"));

  return studentsLoc.map((x) => {
    for (const bs of grades) {
      if (bs.studentId === x.id) {
        x.grade = bs.grade;
      }
    }
    return x;
  });
}
