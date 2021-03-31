const _id = Symbol('id');
const _name = Symbol('name');
const _subject = Symbol('subject');
const _dean = Symbol('dean');
const _teacher = Symbol('teacher');
class Department{
    constructor(id, name,subject,dean,teacher){
        this[_id] =id;
        this[_name] =name;
        this[_subject] = subject || []; 
        this[_dean] =dean || null;
        this[_teacher] = teacher || [];
    }
    get _id(){
        return this[_id];
    }
    get _name(){
        return this[_name];
    }
    set _name(value) {
        this[_name] = value;
    }
    get _subject(){
        return this[_subject];
    }
    set _subject(value){
        this[_subject] = value;
    }
    get _dean(){
        return this[_dean];
    }
    set _dean(value) {
        this[_dean] = value;
    }
    get _teacher(){
        return this[_teacher];
    }
    set _teacher(value) {
        this[_teacher] = value;
    }
    addTeacher(value) {
        this[_teacher].push(teacher);
    }
    toString() {
        return `
         Id :${this[_id]},
         Nmae:${this[_name]},
         `;
    }
}
module.exports =Department;