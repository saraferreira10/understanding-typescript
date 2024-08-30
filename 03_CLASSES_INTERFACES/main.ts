class Department {
  private employees: string[] = [];

  constructor(public readonly name: string) {
    this.name = name;
  }

  getEmployees() {
    return this.employees.slice();
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
}

const d = new Department("Design");
d.describe();

d.addEmployee('Anna')

let e = d.getEmployees()
e.push('TEST')

console.log(e)
d.printEmployee()

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
