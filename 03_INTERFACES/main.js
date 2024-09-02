var u1;
u1 = {
    name: "Paul",
    age: 43,
    greet: function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name, "!"));
    },
};
u1.greet("Hello");
var Mary = /** @class */ (function () {
    function Mary(name, age) {
        this.name = name;
        this.age = age;
    }
    Mary.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name, "!"));
    };
    return Mary;
}());
var m1;
m1 = new Mary("Mary", 24);
m1.greet("Hello");
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(1, 2));
