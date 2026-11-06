//Create an array of 5 student objects and print the names, the topper, the class average and the failed students
const students = [
    { name: "Asha", marks: 85 },
    { name: "Ravi", marks: 35 },
    { name: "Meena", marks: 95 },
    { name: "Karthik", marks: 60 },
    { name: "Priya", marks: 75 }
];

const names = students.map(s => s.name);
console.log("Names:", names);

const topper = students.reduce((best, current) =>
    current.marks > best.marks ? current : best
);
console.log("Topper:", topper);

const total = students.reduce((sum, s) =>
    sum + s.marks, 0
);
const classAverage = total / students.length;
console.log("Class average:", classAverage.toFixed(2));

const failed = students.filter(s => s.marks < 40);
console.log("Failed students:");
console.table(failed);