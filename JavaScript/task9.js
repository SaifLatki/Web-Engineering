function printFirstAndLast(arr){
    for(let i=0;i<arr.length;i++){ //loop through the array
       console.log(arr[i].charAt(0),arr[i].charAt(arr[i].length-1)); //print the first and last character of each element
    }
}

printFirstAndLast(["awsome", "example", "of", "forEach",]); //test case