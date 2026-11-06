//Group students by grade using reduce()
const students = [
    { name: "Asha", grade: "A" },
    { name: "Ravi", grade: "B" },
    { name: "Meena", grade: "A" },
    { name: "Karthik", grade: "C" },
    { name: "Priya", grade: "B" }
];

const grouped = students.reduce((result, student) => {
    const grade = student.grade;

    if (!result[grade]) {
        result[grade] = [];
    }

    result[grade].push(student);

    return result;
}, {});

console.log(grouped);
console.log(JSON.stringify(grouped, null, 2));