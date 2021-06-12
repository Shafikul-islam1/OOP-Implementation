const _id = Symbol('id');
const _name = Symbol('name');
const _credit = Symbol('credit');
class Subject{
    constructor(id, name, credit){
        this[_id] = id; 
        this[_name] = name;
        this[_credit] = credit;
    }
    
    
    toString() {
        return `
         Id :${this[_id]},
         Nmae:${this[_name]},
         Credit:${this[_credit]},
         `;
    }
}
module.exports =Subject;
