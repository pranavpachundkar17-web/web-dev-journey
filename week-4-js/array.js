let students = ["Rohit", "Priya", "Amit", "Sneha"];

students.push("Karan");
console.log(students);

students.shift("Rohit");
console.log(students);

students.splice(1,0,"Pooja");
console.log(students);

let sliced = students.slice(1, 3); 
console.log(sliced);                