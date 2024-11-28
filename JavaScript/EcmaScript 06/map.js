// map use as a collection of elements where each element is stored as a key-value pair.
// we use the map object to store the key-value pairs.
const cars=new Map({
    'BMW': 'Germany',
    'Audi': 'Germany',
    'Mercedes': 'Germany',
    'Toyota': 'Japan',
    'Ford': 'USA'
});
// using for of loop to iterate over the elements of a map and get the key-value pairs.
for (const car of cars) {
    console.log(car);
}

// using for of loop to iterate over the keys of a map
// we can use the keys() method to get the keys of a map.

const person = new Map(); //creating a new map object
person.set('name', 'John'); //adding key-value pairs to the map
person.set('age', 30); //adding key-value pairs to the map
person.set('city', 'New York');//adding key-value pairs to the map

//we can use the get() method to get the value of a key in a map.
person.get('name');//getting the value of the key 'name'

for (const key of person.keys()) {//using for of loop to iterate over the keys of a map
    console.log( person.get(key));
}