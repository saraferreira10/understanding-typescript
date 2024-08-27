function add (num1: number, num2: number){
    return num1 + num2;
}

console.log(add(2, 3))

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}

type PersonType = {
    name: string,
    age: number
}

const person: PersonType = {
    name: 'Mary',
    age: 32,
}

const mary = new Person('Mary', 30)

console.log(mary instanceof Person)
console.log(typeof person)