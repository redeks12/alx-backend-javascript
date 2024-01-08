import getListStudentIds from "./1-get_list_student_ids.js";
export default function getStudentIdsSum(students) {
  const func = (a, n) => a + n;

  return getListStudentIds(students).reduce(func, 0);
}
