const UniPerson = require('./UniPerson');
const_studentID = Symbol('studentID');
const_guardian = Symbol('guardian');
const_exams = Symbol('exams');
const_fee = Symbol('fee');
class Student{
    constructor(id, name,studentID,guardian,exam,fee){
        super(id,name)
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
        return `${super.toString()},StudentId = ${this[_studentID]}`
     }
}
module.exports =Student;
