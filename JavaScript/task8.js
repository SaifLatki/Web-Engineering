function spacialMultiply(a, b) {//function to multiply two numbers
    if(arguments.length===2){//if the function is called with two arguments
        return a * b;//return the product of the two numbers
    }
    return function(b) {//if the function is called with one argument
        console.log("returning a function");//print the message
    };
}

console.log(spacialMultiply(2, 3));//test case
console.log(spacialMultiply(2));//test case