//Use map to convert an array of Celsius temperatures to Fahrenheit
const celsius = [0, 20, 30, 40];

const fahrenheit = celsius.map(c =>
    (c * 9 / 5) + 32
);

console.log(fahrenheit);