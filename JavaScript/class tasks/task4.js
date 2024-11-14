function isPrime(num){
    if(num < 2) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log("17 is prime: ",isPrime(17)); // true
console.log("4 is not prime: ",isPrime(4)); // false