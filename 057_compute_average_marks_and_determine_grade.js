
// Step 1: Student marks
let marks = {
  David: 80,
  Vinoth: 77,
  Divya: 88,
  Ishitha: 95,
  Thomas: 68
};

// Step 2: Calculate average
let total = 0;
let count = 0;

for (let student in marks) {
  total += marks[student];
  count++;
}

let average = total / count;

// Step 3: Determine grade based on average
let grade;

if (average < 60) {
  grade = 'F';
} else if (average < 70) {
  grade = 'D';
} else if (average < 80) {
  grade = 'C';
} else if (average < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

// Step 4: Output the results
console.log("Average Marks: " + average);
console.log("Grade: " + grade);
