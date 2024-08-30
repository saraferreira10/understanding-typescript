class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: ", this.name);
  }
}

const d = new Department("Design");
d.describe();

const departmentCopy = {name: 'DUMMY', describe: d.describe};

departmentCopy.describe()

// const testThisCopy = {
//   name: "Test",
//   describe: d.describe,
// };

// testThisCopy.describe();
// d.describe.bind({ name: "Using bind to test" })();
// d.describe.call({ name: "Using call to test" });
// d.describe.apply({ name: "Using apply to test" });
