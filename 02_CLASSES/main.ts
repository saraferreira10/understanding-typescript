class Department {
  private employees: string[] = [];
  private static departments: Department[] = [];

  constructor(public readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
    Department.departments.push(this)
  }

  get getEmployees() {
    return this.employees.slice();
  }

  set setEmployees(value: string[]) {
    this.employees = value;
  }

  describe(this: Department) {
    console.log("Department: ", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees);
  }

  static printDepartments() {
    console.log('Departments', Department.departments)
  }
}

class ItDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins
  }

  describe(this: Department) {
    console.log("IT Department: ", this);
  }
}

const d = new ItDepartment("01", ['Joe', 'Mark']);

d.setEmployees = ['Jack', 'Mary']
d.addEmployee('Anna')
d.addEmployee('Max')
console.log('Employees', d.getEmployees)
d.describe();

const d2  = new Department('02', 'Design')
const d3  = new Department('03', 'Finances')
const d4  = new Department('04', 'HR')
Department.printDepartments()


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