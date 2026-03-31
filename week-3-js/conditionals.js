// 1. Grade checker
let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// 2. Ternary
let age = 16;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// 3. Truthy/falsy
let username = "";
if (!username) {
    console.log("No username provided");
}