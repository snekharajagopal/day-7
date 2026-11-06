// Write a function that receives an object and returns a text with one 'key: value' line per property, using Object.entries
function objectToText(obj) {
    return Object.entries(obj)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
}

const student = {
    name: "Asha",
    age: 20,
    city: "Chennai"
};

console.log(objectToText(student));