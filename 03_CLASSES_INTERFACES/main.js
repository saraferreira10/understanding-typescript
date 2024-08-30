var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        this.employees = [];
        this.name = name;
    }
    Department.prototype.getEmployees = function () {
        return this.employees.slice();
    };
    Department.prototype.describe = function () {
        console.log("Department: ", this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployee = function () {
        console.log(this.employees);
    };
    return Department;
}());
var d = new Department("Design");
d.describe();
d.addEmployee('Anna');
var e = d.getEmployees();
e.push('TEST');
console.log(e);
d.printEmployee();
// this does not work because name is a readonly property
// d.name = 'new name'
// const departmentCopy = { name: "DUMMY", describe: d.describe };
// departmentCopy.describe();
// const testThisCopy = {
//   name: "Test",
//   describe: d.describe,
// };
// testThisCopy.describe();
// d.describe.bind({ name: "Using bind to test" })();
// d.describe.call({ name: "Using call to test" });
// d.describe.apply({ name: "Using apply to test" });
