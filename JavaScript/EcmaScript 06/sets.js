// create the set as a collection of unique elements.
// we use the set object to store the unique elements.

const num= new Set([1,2,3,4,5,6,7,8,9,10]);// creating a new set object

for(const n of num){//using for of loop to iterate over the elements of a set
    console.log(n);
}

//creating a set of names
//set is used to store the unique elements.
//it does not allow duplicate elements.
const names=set();//creating a new set object
names.add('John');//adding elements to the set
names.add('Doe');//adding elements to the set
names.add('John');//adding elements to the set

for(const name of names){//using for of loop to iterate over the elements of a set
    console.log(name);
}