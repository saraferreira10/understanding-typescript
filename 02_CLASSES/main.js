var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.id = id;
        this.name = name;
        Department.departments.push(this);
    }
    Object.defineProperty(Department.prototype, "getEmployees", {
        get: function () {
            return this.employees.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "setEmployees", {
        set: function (value) {
            this.employees = value;
        },
        enumerable: false,
        configurable: true
    });
    Department.prototype.describe = function () {
        console.log("Department: ", this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployee = function () {
        console.log(this.employees);
    };
    Department.printDepartments = function () {
        console.log('Departments', Department.departments);
    };
    Department.departments = [];
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ItDepartment.prototype.describe = function () {
        console.log("IT Department: ", this);
    };
    return ItDepartment;
}(Department));
var d = new ItDepartment("01", ['Joe', 'Mark']);
d.setEmployees = ['Jack', 'Mary'];
d.addEmployee('Anna');
d.addEmployee('Max');
console.log('Employees', d.getEmployees);
d.describe();
var d2 = new Department('02', 'Design');
var d3 = new Department('03', 'Finances');
var d4 = new Department('04', 'HR');
Department.printDepartments();
// let e = d.getEmployees()
// e.push('TEST')
// console.log(e)
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
