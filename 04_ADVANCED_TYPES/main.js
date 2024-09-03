var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function printEmployee(emp) {
    console.log("Name:", emp.name);
    if ("privileges" in emp) {
        console.log("Privileges", emp.privileges);
    }
    console.log("Type:", typeof emp); // object
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
printEmployee(e1);
console.log("Type:", typeof new Car()); // object
console.log(new Car() instanceof Car && "Car"); // Car
var b1 = {
    type: 'bird',
    flyingSpeed: 1000
};
var errorBag = {
    email: "Not a valid email"
};
