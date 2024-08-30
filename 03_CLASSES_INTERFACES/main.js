var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: ", this.name);
    };
    return Department;
}());
var d = new Department("Design");
d.describe();
var departmentCopy = { name: 'DUMMY', describe: d.describe };
departmentCopy.describe();
// const testThisCopy = {
//   name: "Test",
//   describe: d.describe,
// };
// testThisCopy.describe();
// d.describe.bind({ name: "Using bind to test" })();
// d.describe.call({ name: "Using call to test" });
// d.describe.apply({ name: "Using apply to test" });
