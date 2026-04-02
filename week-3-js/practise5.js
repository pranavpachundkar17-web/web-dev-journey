function factorial(a) {
    let result = 1; // start at 1, NOT 0 (multiplying by 0 kills everything)
    
    for (let i = a; i > 0; i--) {
        // each iteration multiply result by current i
        result = result * i;
    }
    
    return result; // return AFTER loop finishes, not inside
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6