const fs = require("fs");
const { Student } = require("./student.js");

//read file
const data = fs.readFileSync(`data.json`, "utf8");
const students = JSON.parse(data);

//convert json to Student object
students.forEach(function (student) {
  student.__proto__ = new Student();
});

//function calculate students' gpa
function tinhTrungBinh(students) {
  for (const person of students) {
    person.getAverage()
  }
}

//function find highest and lowest grades in each class
function diemTheoLop(students) {
  const diemCacLop = [];

  const groups = students.reduce((groups, item) => {
    const group = groups[item.lop] || [];
    group.push(item);
    groups[item.lop] = group;
    return groups;
  }, {});

  for (const lop in groups) {
    let diemCaoNhat = 0;
    let diemThapNhat = 10;
    for (const person of groups[lop]) {
      if (person.diemTrungBinh > diemCaoNhat)
        diemCaoNhat = person.diemTrungBinh;
      if (person.diemTrungBinh < diemThapNhat)
        diemThapNhat = person.diemTrungBinh;
    }
    diemCacLop.push({
      tenLop: lop,
      diemCaoNhat: diemCaoNhat,
      diemThapNhat: diemThapNhat,
    });
  }

  return diemCacLop;
}

//function calculate letter-grades
function tinhDiemChu(students) {
  for (const person of students) {
    person.getLetterGrade()
  }
}

//function rank students
function xepLoai(students) {
    for (const person of students) {
        person.xepLoai = person.rankStudent();
    }
}

//functions called on students
tinhTrungBinh(students)
tinhDiemChu(students)
xepLoai(students)

//print students' added information
console.log(students);

//uncomment following line to show highest and lowest grades in each class
// console.log(diemTheoLop(students));
