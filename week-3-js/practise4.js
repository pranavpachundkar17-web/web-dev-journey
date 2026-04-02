function reverseString(str) {
    let result = ""; // empty string to build on
    
    for (let i = str.length - 1; i >= 0; i--) {
        // each loop, add current character to result
        result = result + str[i];
    }
    
    return result;
}

console.log(reverseString("hello"));