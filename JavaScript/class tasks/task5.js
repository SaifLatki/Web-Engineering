function isEven(num){ // function to check if a number is even
    if(num % 2 === 0){// if the number is divisible by 2
        return true;// return true
    }
    return false; // return false
}

function isOdd(n){// function to check if a number is odd
    if(n % 2 !== 0){ // if the number is not divisible by 2
        return true;
    }
    return false;
}

function isPrime(num){ // function to check if a number is prime
    if(num < 2) return false;// if the number is less than 2 return false
    for(let i = 2; i < num; i++){ // loop through the numbers from 2 to the number
        if(num % i === 0){ // if the number is divisible by any number other than 1 and itself
            return false;
        }
    }
    return true;
}



function numFact(num,callback){ // function to check if a number is even
    
    if(num<0){ // if the number is negative
        return -1;
    }
    else if(typeof callback != "function"){ // if the callback is not a function
        return "error";
    }
    return callback(num); // return the callback function
}

let test=numFact(79,isPrime); // test the function with a prime number
console.log(test); // true