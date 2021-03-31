const UniPerson = require('./UniPerson');
const_employeeID = Symbol('employeeID');
const_salary= Symbol('salary');
class Employee{
    constructor(id, name,employeeID,salary){
        super(id,name)
        this[_employeeID] = employeeID;
        this[_salary] = null;
    }
    get employeeID(){
        return this[_employeeID];
    }
    
    get salary(){
        return this[_salary];
    }
     set salary(value) {
         this[_salary]=value;
     }
     toString(){
         
         return `${super.toString()},employeeID = ${this[_employeeID]},Salary = ${this[_salary]}`;
     }
}
module.exports =Employee;
