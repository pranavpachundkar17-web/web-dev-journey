function isPrime(a) {
    if (a <= 1) return false;
    
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false; // found a divisor, not prime
        }
    }
    return true; // nothing divided it, it's prime
}

console.log(isPrime(2));  // true
console.log(isPrime(4));  // false
console.log(isPrime(7));  // true
console.log(isPrime(9));  // false