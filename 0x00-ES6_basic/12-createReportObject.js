export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(numDep) {
      return Object.keys(numDep).length;
    },
  };
}
