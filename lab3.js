'use strict';
const fs = require('fs');

let file = fs.readFileSync('students.csv', 'utf-8');

file = file.split(/\n?\n/);
console.log(file)
file[0] = +file[0];
for (let i = 1; i <= file[0]; i++) {
  file[i] = file[i].split(',');
}
for (let i = 1; i <= file[0]; i++) {
  for (let g = 1; g < 6; g++) {
    file[i][g] = +file[i][g];
    file[i][g] =parseInt(file[i][g])
  }
}
console.log(file)
let trueStudents = [];
for (let i = 1; i <= file[0]; i++) {
  if (file[i][6] === 'TRUE') {
    const score = [file[i][0], (file[i][1] + file[i][2] + file[i][3] +
      file[i][4] + file[i][5]) / 5];
    trueStudents.push(score);
  }
}
let allStudents = [];
for (let i = 1; i <= file[0]; i++) {
  const score = [file[i][0], (file[i][1] + file[i][2] + file[i][3] +
    file[i][4] + file[i][5]) / 5];
  allStudents.push(score);
}

function compare(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return (a[1] < b[1]) ? 1 : -1;
  }
}
allStudents = allStudents.sort(compare);

const top40 = [];
const num1 = file[0] * 4 / 10;
for (let i = 0; i < num1; i++) {
  top40[i] = allStudents[i];
}


let stipend = [];
trueStudents = trueStudents.sort(compare);
const num2 = trueStudents.length * 4 / 10;
for (let i = 0; i < num2; i++) {
  stipend[i] = trueStudents[i];
  stipend[i][1] = stipend[i][1].toFixed(3);
}

console.log(top40, stipend[stipend.length - 1][1]);

for (let i = 0; i <= stipend.length - 1; i++) {
  stipend[i] = stipend[i].join(',');
}

stipend = stipend.join('\n');

fs.writeFile('rating.csv', stipend, 'utf-8', (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('The file was saved!');
});
