function add(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString;
  }
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
  roleEnum: Role.ADMIN, // 0
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
