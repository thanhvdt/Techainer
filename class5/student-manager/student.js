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

  //tinh diem trung binh
  getAverage() {
    this.diemTrungBinh =
      (this.diemToan + this.diemLy + this.diemHoa + this.diemAnh) / 4;
  }

  //so sanh diem trung binh
  compareToAverage(diemCaoNhat, diemThapNhat) {
    if (this.diemTrungBinh < diemThapNhat) {
      return -1;
    } else if (this.diemTrungBinh > diemCaoNhat) {
      return 1;
    }
  }

  //doi diem sang chu
  convertLetterGrade(grade) {
    if (grade >= 8.5) return "A";
    else if (grade >= 7) return "B";
    else if (grade >= 5.5) return "C";
    else if (grade >= 5) return "D+";
    else if (grade >= 4) return "D";
    else return "F";
  }

  getLetterGrade() {
    this.diemChuToan = convertLetterGrade(this.diemToan);
    this.diemChuLy = convertLetterGrade(this.diemLy);
    this.diemChuHoa = convertLetterGrade(this.diemHoa);
    this.diemChuAnh = convertLetterGrade(this.diemAnh);
  }

  //loc hoc sinh theo diem
  findStudentBy(category, value) {
    switch (category) {
      case "name":
        return this.tenSV == value;
      case "grade":
        return this.grade == value;
      case "age":
        return this.tuoi == value;
      case "class":
        return this.lop == value;
    }
  }

  //xep loai hoc sinh
  rankStudent() {
    if (this.diemTrungBinh >= 9) return "Excellent";
    else if (this.diemTrungBinh >= 8) return "Good";
    else if (this.diemTrungBinh >= 7) return "Average";
    else return "Weak";
  }
}

module.exports = {Student}