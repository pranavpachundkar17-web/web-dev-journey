// 1. let — reassignment
let score = 100;
score = 200;
console.log(score); // should print 200

// 2. const — modifying object property
const user = { name: "Pranav" };
user.name = "Rohit";
console.log(user.name); // should print Rohit

// 3. var — leaks out of block
if (true) {
    var city = "Pune";
}
console.log(city); // should print Pune (var leaked out)


// Then open terminal in VS Code and run:
// ```
// node week-3-js/variables.js
// ```

// You should see:
// ```
// 200
// Rohit
// Pune