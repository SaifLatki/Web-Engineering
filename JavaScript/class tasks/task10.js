function addKeyAndValue(arr, key, value) {
    for (let i = 0; i < arr.length; i++) {
        arr[i][key] = value;
    }
  return arr;
}

let a=addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);
console.log(a);