function find(arr,callback){ //function to find the first element in the array that satisfies the condition
    for(let i=0;i<arr.length;i++){ //loop through the array
        if(callback(arr[i])){ //if the condition is satisfied
            return arr[i]; //return the element
        }
    }
    return undefined; //if no element satisfies the condition
}

console.log(//test cases
    find([8,11,4,27],function(val){
        return val >= 10;
    })
);

console.log( //test cases
    find([8,11,4,27],function(val){
        return val === 5;
    })
);