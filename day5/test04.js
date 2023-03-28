class Student {
    constructor(student_no, name, major, phone_number) {
        this.student_no = student_no;
        this.name = name;
        this.major = major;
        this.phone_number = phone_number;
    }

    print() {
        console.log(`${this.student_no} | ${this.name} | ${this.major} | ${this.phone_number}`);
    }
}

let school = [
    new Student('3101', 'Kim', '뉴미디어소프트웨어과', '010-1111-1111'),
    new Student('3108', 'Andy', '뉴미디어소프트웨어과', '010-2222-2222'),
    new Student('3213', '철수', '뉴미디어소프트웨어과', '010-3333-3333'),
    new Student('3410', 'Maria', '뉴미디어웹솔루션과', '010-4444-4444'),
    new Student('3606', 'John', '뉴미디어디자인과', '010-5555-5555')
]

for(let i = 0; i<school.length; i++) {
    console.log(school[i]);
}

console.log('------------------------------------------------');

for (const student of school) {
    student.print();
}

console.log('------------------------------------------------');

for (const key in school) {
    console.log(school[key].student_no + '\t'+ school[key].name+ '\t' + school[key].major+ '\t' + school[key].phone_number);
}

console.log('------------------------------------------------');

school.forEach(element => {
    console.log(element.student_no+"  "+element.name+"  "+element.major+"  "+element.phone_number);
});
