//creating the object with it's data
const person={
    firstName: "Saif",
    lastName: "Latki",
    age: 24,
    university:"IBA",
    degree: "BSCS",
    semester: 5
};
// destructure the data in object use when data is large we have to access the limited data 
let {firstName,university,semester}=person;// fetch data from the person object 

console.log(firstName,university,semester);// print the fetched data 