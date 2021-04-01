const UniPerson = require('./UniPerson');
const _studentID = Symbol('studentID');
const _guardian = Symbol('guardian');
const _exams = Symbol('exams');
const _fee = Symbol('fee');
class Student{
    constructor(id, name,studentID,guardian){
        // super(id, name)
        // this[_id] = id;
        // this[_name]= name;
        this[_studentID] = studentID;
        this[_guardian] = guardian;
        this[_exams] = [];
        this[_fee] = null;
    }
    get studentID(){
        return this[_studentID];
    }
    get guardian(){
        return this[_guardian];
    }
    get exams(){
        return this[_exams];
    }
    set exams(value) {
        this[_exams]=value;
    }
    addExam(exam){
        this[_exams].push(exam);
    }
    get fee(){
        return this[fee];
    }
     set fee(value) {
         this[fee]=value;
     }
     toString(){
        return `
        ${super.toString()},
        StudentId = ${this[_studentID]},
        Guardian = ${this[_guardian]},
        Exam = ${this[_exams]},
        Fee = ${this[_fee]}
        `}
}
module.exports =Student;
