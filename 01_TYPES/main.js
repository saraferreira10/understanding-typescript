function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = {
    name: "Mary",
    age: 32,
    // TUPLES
    role: [1, "Admin"],
};
var mary = new Person("Mary", 30);
console.log(mary instanceof Person);
console.log(typeof person);
console.log(person.role[0]);
