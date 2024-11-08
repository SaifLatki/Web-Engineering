function isOdd(n){
    if(n % 2 !== 0){
        return true;
    }
    return false;
}

console.log("4 is not odd: ",isOdd(4)); // false
console.log("5 is odd: ",isOdd(5)); // true