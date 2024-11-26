// Ecma 5 using blocks to show the functions
var x=function(x,y){
    return x+y;
}

//Ecma 6 using the arrow functions in one line to show the values
const y= (a,b) => a+b;


let a=x(4,3);
console.log("Block Function value",a);// correct answer to return the sum

let b=y(5,4);
console.log("Arrow Funtion Value",b);// same work as the block function return the sum