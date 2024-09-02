interface Named {
  readonly name: string;
}

interface Greetable {
  greet(phrase: string): void;
}

interface Person extends Named, Greetable {
  age?: number; // it's optional
}

let u1: Person;

u1 = {
  name: "Paul",
  age: 43,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}!`);
  },
};

u1.greet("Hello");

class Mary implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}!`);
  }
}

let m1: Person;
m1 = new Mary("Mary", 24);
m1.greet("Hello");

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(1, 2));
