var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function sum(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    try {
        alert(sum(Number(input1.value), Number(input2.value)));
    }
    catch (e) {
        console.error(e);
    }
});
