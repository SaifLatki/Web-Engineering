// for in loop use for iterating over the properties of an object.
// also used to iterate over the elements of an array.but should not be used to iterate over the elements of an array.
// it may show the index of the array in a random order.


//using for in loop to iterate over the properties of an object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {// it shows the properties of the object in a random order.
    console.log(key, person[key]);//name John, age 30, city New York
}


//using for in loop to iterate over the elements of an array
const cars = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Ford'];

for (const index in cars) {
    //it shows the index of the array in a random order.
    console.log(index, cars[index]);//0 BMW, 1 Audi, 2 Mercedes, 3 Toyota, 4 Ford should not be used to iterate over the elements of an array.
}

