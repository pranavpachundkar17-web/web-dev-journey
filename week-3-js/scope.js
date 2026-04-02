// global scope
let globalVar = "global";

function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        console.log(globalVar); // can see global
        console.log(outerVar);  // can see outer
        console.log(innerVar);  // own variable
    }
    
    inner();
}

outer();