//Add a new property to your object, delete another, and print the keys with Object.keys
const person = {
    name: "Snekha",
    age: 22,
    city: "Chennai"
};

person.email = "snekharajagopal@gmail.com";

delete person.city;

console.log(person);
console.log(Object.keys(person));