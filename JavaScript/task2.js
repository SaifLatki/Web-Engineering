function isEven(num){ // function to check if a number is even
    if(num % 2 === 0){// if the number is divisible by 2
        return true;// return true
    }
    return false; // return false
}

console.log("4 is Even: ",isEven(4)); // true
console.log("5 is not Even: ",isEven(5)); // false