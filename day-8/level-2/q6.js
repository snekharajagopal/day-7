//Sort numbers ascending and descending, names alphabetically, and an array of student objects by marks
//ascending
const numbers = [50, 10, 40, 20];
numbers.sort((a, b) => a - b);
console.log(numbers);

//descending
const num = [50, 10, 40, 20];
num.sort((a, b) => b - a);
console.log(num);

//names
const names = ["Ravi", "Asha", "Meena", "Karthik"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);

//marks
const students = [
    { name: "Asha", marks: 85 },
    { name: "Ravi", marks: 60 },
    { name: "Meena", marks: 95 }
];
students.sort((a, b) => b.marks - a.marks);
console.table(students);