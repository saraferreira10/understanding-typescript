function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(2, 3));

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// enum Role {
//   ADMIN = 'ADMIN',
//   READ_ONLY = 5,
//   AUTHOR = 6,
// }

type PersonType = {
  name: string;
  age: number;

  // TUPLE TYPE
  role: [number, string];
  roleEnum: Role;
};

const person: PersonType = {
  name: "Mary",
  age: 32,
  // TUPLES
  role: [1, "Admin"],
  roleEnum: Role.ADMIN // 0
};

const mary = new Person("Mary", 30);

console.log(mary instanceof Person);
console.log(typeof person);

// TUPLES
console.log(person.role[0]);

// I cannot assign a numeric value to the second property
// person.role[1] = 1

// This is acceptable
person.role = [2, "User"];
