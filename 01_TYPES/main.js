function add(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString;
    }
}
console.log(add(2, 3));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Mary",
    age: 32,
    // TUPLES
    role: [1, "Admin"],
    roleEnum: Role.ADMIN, // 0
};
var mary = new Person("Mary", 30);
console.log(mary instanceof Person);
console.log(typeof person);
// TUPLES
console.log(person.role[0]);
// I cannot assign a numeric value to the second property
// person.role[1] = 1
// This is acceptable
person.role = [2, "User"];
