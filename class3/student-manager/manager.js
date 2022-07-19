const fs = require("fs");
class Student {
  constructor(
    maSV,
    tenSV,
    tuoi,
    gioiTinh,
    ngaySinh,
    diemToan,
    diemLy,
    diemHoa,
    diemAnh,
    lop
  ) {
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.tuoi = tuoi;
    this.gioiTinh = gioiTinh;
    this.ngaySinh = ngaySinh;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemAnh = diemAnh;
    this.lop = lop;
  }

}

const data = fs.readFileSync(`data.json`, "utf8");
const students = JSON.parse(data);

//Ham tinh diem trung binh tung hoc sinh
function tinhTrungBinh(students) {
  for (const person of students) {
    person.diemTrungBinh =
      (person.diemToan + person.diemLy + person.diemHoa + person.diemAnh) / 4;
  }
}

//Ham tinh diem cao nhat va thap nhat moi lop
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
    diemCacLop.push({"tenLop": lop, "diemCaoNhat": diemCaoNhat, "diemThapNhat": diemThapNhat});
  }

  return diemCacLop;
}

function diemChu(grade) {
    if (grade >= 8.5) {
        return 'A'
    } else if (grade >=7) {
        return 'B'
    } else if (grade >=5.5) {
        return 'C'
    } else if (grade >= 5) {
        return 'D+'
    } else if (grade >= 4) {
        return 'D'
    } else return 'F'
}

//Ham quy doi diem chu
function tinhDiemChu(students){
    for (const person of students) {
        person.diemChuToan = diemChu(person.diemToan);
        person.diemChuLy = diemChu(person.diemLy);
        person.diemChuHoa = diemChu(person.diemHoa);
        person.diemChuAnh = diemChu(person.diemAnh);
    }
}

tinhDiemChu(students);
tinhTrungBinh(students);

//In thong tin tat ca hoc sinh
console.log(students);

//In diem cao nhat va thap nhat moi lop
console.log(diemTheoLop(students));

