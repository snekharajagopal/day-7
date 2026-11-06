//Convert your object to JSON text with stringify and back to an object with parse
const person = {
    name: "Snekha",
    age: 22,
    city: "Chennai"
};
const jsonText = JSON.stringify(person);
console.log(jsonText);
const newPerson = JSON.parse(jsonText);
console.log(newPerson);
console.log(newPerson.name);