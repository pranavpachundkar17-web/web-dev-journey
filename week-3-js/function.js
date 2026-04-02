// 1. Function declaration
function greet(name = "Guest") {
    return "Hello " + name;
}
console.log(greet("Pranav"));
console.log(greet());

// 2. Arrow function
const square = x => x * x;
console.log(square(5));

// 3. Function with return vs no return
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);