console.log("Grade calculator");
const marks = Number(prompt("Enter marks:"));

if (Number.isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Invalid marks.");
} else {
  let grade;

  if (marks >= 90) {
    grade = "A+";
  } else if (marks >= 75) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  let remark;

  switch (grade) {
    case "A+":
      remark = "Outstanding";
      break;
    case "A":
      remark = "Excellent";
      break;
    case "B":
      remark = "Good";
      break;
    case "C":
      remark = "Average";
      break;
    default:
      remark = "Needs improvement";
  }

  console.log(`Grade: ${grade}`);
  console.log(`Remark: ${remark}`);
}