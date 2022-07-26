const fs = require("fs");
const {Student} = require('./student.js');

//read file 
const data = fs.readFileSync(`data.json`, "utf8");
const students = JSON.parse(data);

//tinh diem trung binh toan bo hoc sinh
function tinhTrungBinh(students) {
  for (const person of students) {
    person.getAverage()
  }
}

tinhTrungBinh(students)
console.log(students)
