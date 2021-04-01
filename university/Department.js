const _id = Symbol('id');
const _name = Symbol('name');
const _subjects = Symbol('subjects');
const _dean = Symbol('dean');
const _teacher = Symbol('teacher');
class Department{
    constructor(id, name,subjects,dean,teacher){
        this[_id] =id;
        this[_name] =name;
        this[_subjects] = subjects || []; 
        this[_dean] =dean || null;
        this[_teacher] = teacher || [];
    }
    get id(){
        return this[_id];
    }
    get name(){
        return this[_name];
    }
    set name(value) {
        this[_name] = value;
    }
    get subjects(){
        return this[_subjects];
    }
    set subjects(value){
        this[_subjects] = value;
    }
    get dean(){
        return this[_dean];
    }
    set dean(value) {
        this[_dean] = value;
    }
    get teacher(){
        return this[_teacher];
    }
    set teacher(value) {
        this[_teacher] = value;
    }
    addTeacher(value) {
        this[_teacher].push(value);
    }
    toString() {
        return `
         Id :${this[_id]},
         Nmae:${this[_name]},
         Subjects :${this[_subjects]}
         `;
    }
}
module.exports =Department;