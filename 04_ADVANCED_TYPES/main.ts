type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

function printEmployee(emp: Employee | Admin) {
  console.log("Name:", emp.name);
  if ("privileges" in emp) {
    console.log("Privileges", emp.privileges);
  }
  console.log("Type:", typeof emp); // object
}

class Car {
  drive() {
    console.log("Driving...");
  }
}

printEmployee(e1);

console.log("Type:", typeof new Car()); // object
console.log(new Car() instanceof Car && "Car"); // Car

type Species = "bird" | "horse"; // ...

interface Animal {
  type: Species;
}

interface Bird extends Animal {
  type: "bird";
  flyingSpeed: number;
}

interface Horse extends Animal {
  type: "horse";
  flyingSpeed: number;
}

const b1: Bird = {
    type: 'bird',
    flyingSpeed: 1000
}

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email"
}