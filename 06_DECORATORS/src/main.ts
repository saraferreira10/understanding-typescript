function Logger(constructor: Function) {
  console.log("Logging...");
}

function PutSomeHTML(id: string, template: string) {
  return function (constructor: any) {
    const element = document.getElementById(id);

    if (!element) return;
    const p = new constructor();

    element.innerHTML = template + "<li>" + p.name + "</li>"
  };
}

// @Logger
@PutSomeHTML("app", "<h1>Hello World!</h1>")
class Person {
  name = "Max";
  
  constructor() {
    console.log("Creating person...");
  }
}
