class Person {
  constructor(protected name: string) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(protected name: string, private age: number) {
    super(name);
    this.age = age;
  }

  get getAge() {
    return this.age;
  }
}

class Teacher extends Person {
  constructor(protected name: string, private discipline: string) {
    super(name);
    this.discipline = discipline;
  }

  get getDiscipline() {
    return this.discipline;
  }
}

const persons: Array<Person> = [
  new Student("Max", 12),
  new Teacher("Joe", "History"),
];

for (const person of persons) {
  console.log("------------------");
  console.log("Nome:", person.getName);

  if ("getAge" in person) {
    console.log("Idade:", person.getAge);
  }

  if ("getDiscipline" in person) {
    console.log("Disciplina:", person.getDiscipline);
  }
}

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    return resolve("Resolvido");
  }, 5000);
});

promise
  .then((e) => {
    console.log(e);
    return "Next step";
  })
  .then((e) => {
    console.log(e);
  })
  .catch((error) => {
    console.error(error);
  });

// type ToDo = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data: ToDo[]) => console.log(data.slice(0, 5)));

function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return Object.assign({}, a, b);
}

const mergedObject = merge({ name: "Mary" }, { age: 23 });

console.log(mergedObject.name, "-", mergedObject.age);

// function printPerson<T extends Person> (a: T){
//     console.log(a.getName)
// }

// printPerson(new Student("Lucy", 13))

function printArr<T extends object>(a: Array<T>) {
  for (const [index, value] of a.entries()) {
    console.log(index, "-", value);
  }
}
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

printArr(people);

interface Lengthy {
  length: number;
}

function returnLength<T extends Lengthy>(element: T) {
  return element.length;
}

console.log(returnLength("string"));
console.log(returnLength(["string"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));
