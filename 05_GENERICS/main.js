var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.age = age;
        _this.age = age;
        return _this;
    }
    Object.defineProperty(Student.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, discipline) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.discipline = discipline;
        _this.discipline = discipline;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "getDiscipline", {
        get: function () {
            return this.discipline;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
var persons = [
    new Student("Max", 12),
    new Teacher("Joe", "History"),
];
for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
    var person = persons_1[_i];
    console.log("------------------");
    console.log("Nome:", person.getName);
    if ("getAge" in person) {
        console.log("Idade:", person.getAge);
    }
    if ("getDiscipline" in person) {
        console.log("Disciplina:", person.getDiscipline);
    }
}
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        return resolve("Resolvido");
    }, 5000);
});
promise
    .then(function (e) {
    console.log(e);
    return "Next step";
})
    .then(function (e) {
    console.log(e);
})
    .catch(function (error) {
    console.error(error);
})
    .finally(function () {
    console.log("Operação completa!");
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
