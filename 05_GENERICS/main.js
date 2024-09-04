"use strict";
class Person {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age) {
        super(name);
        this.name = name;
        this.age = age;
        this.age = age;
    }
    get getAge() {
        return this.age;
    }
}
class Teacher extends Person {
    constructor(name, discipline) {
        super(name);
        this.name = name;
        this.discipline = discipline;
        this.discipline = discipline;
    }
    get getDiscipline() {
        return this.discipline;
    }
}
const persons = [
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
const promise = new Promise((resolve, reject) => {
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
function merge(a, b) {
    return Object.assign({}, a, b);
}
const mergedObject = merge({ name: "Mary" }, { age: 23 });
console.log(mergedObject.name, "-", mergedObject.age);
