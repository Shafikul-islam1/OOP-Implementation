const { Guardian,Student,Teacher} = require('./persone');
const {Contact,Address} = require('./contact');
const {Department,Subject} = require('./university');
// Guardian Id
const guardian = new Guardian(11005,'Md.shafikul islam','web Developer',30000);
guardian.blood = 'A+';
guardian.contact = new Contact({
    id:11,
    email:'shafikul1170@gmail.com',
    phone:'01746711170',
    alternativePhone:'01746711170',
    address:'Barishal'
});
guardian.contact.address = new Address({
    id:1,
    roadNo:'bd-12',
    city:'Barishal',
    region:'barishal city',
    country:'bangaladesh',
    postalCode:'8200'
});

// console.log(guardian.toString());
// console.log(guardian.contact + ' ');

/*
 Student
 */
const student = new Student(11,'Md.Rubel','ST1190',guardian);
student.blood= 'A+'
student.contact = new Contact(
    {
        id:999,
        email:'shafikul1170@gmail.com',
        phone:'01746711111',
        alternativePhone : student.guardian.contact.phone,
        address: student.guardian.contact.address
    })
// console.log(student);
/*
 Department Id
 */
const department = new Department({id :1,name: 'EEE'})
student.department = department;
department.subjects = [
    new Subject(1,'conputer',4),
    new Subject(2,'Introduction to software',3),
    new Subject(3,'software development',2)
];
// console.log(student);
// console.log(student.department.toString());
const credit = student.department.subjects.reduce((a, b) =>{
    a += b.credit;
    return a;
},0);
// console.log('Total Credit',credit);
/*
 Teachers
 */
const dean = new Teacher(1,'Nayen',department.subjects[0],'EM1')
dean.blood = 'AB+';
dean.department = department;
dean.salary = '10000';
dean.contact = new Contact({
    id : 3,
    email : 'sir@tst.com',
    phone : '123',
    address : new Address({
        id :33,
        roadNo:'ble 12',
        city : 'Barishal',
        region : 'Dhaka',
        country : 'bangladesh',
        postalCode : 8200,
    })
})

const teacher1= new Teacher(2,'Rube',department.subjects[1],'EM2');
teacher1.department = department;
teacher1.blood = 'A+'
teacher1.salary = '70000'
teacher1.contact = new Contact({
    id : 3,
    email : 'teacher@test.com',
    phone : '01746711170',
    address : new Address({
        id :33,
        roadNo:'ble 12',
        city : 'Barishal home',
        region : 'khulna',
        country : 'bangladesh',
        postalCode : 8300,
    })
});

const teacher2= new Teacher(3,'Rubel',department.subjects[2],'EM3');
teacher2.department = department;
teacher2.blood = 'A-'
teacher2.salary = '90000'
teacher2.contact = new Contact({
    id : 3,
    email : 'teacher@test.com',
    phone : '01746711170',
    address : new Address({
        id :33,
        roadNo:'ble 12',
        city : 'Barishal home',
        region : 'khulna home',
        country : 'bangladesh',
        postalCode : 8000,
    })
});
department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);
// console.log(student.department);
// console.log(JSON.stringify(student));

// student.department.teachers.forEach((teacher, index) => {
//     console.log(`${index + 1} . ${teacher.name} (${teacher.student.name})`)
// });
// console.log(dean);
// console.log(teacher1);
// console.log(teacher2);
// console.log(dean.department);
guardian.addchild(student);
// console.log(guardian);
// const teachersSalary = guardian.children[0].department.teachers.reduce(
//     (a,c) => {
//     a += c.salary;
//     return a;
// },0)
// console.log(teachersSalary);
let count = 0;
if(student.blood == 'O-') count++
if(student.guardian.blood == 'O-') count++
student.department.teachers.forEach(teacher =>{
    if(teacher.blood == 'O+') count++
})
console.log(count);



