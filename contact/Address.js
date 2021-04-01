const _id = Symbol('id');
const _roadNo = Symbol('roadNo');
const _city = Symbol('city');
const _region = Symbol('region');
const _country = Symbol('country');
const _postalCode = Symbol('postalCode');
class Address{
    constructor({id,roadNo,city,region,country,postalCode}){
        this[_id] = id;
        this[_roadNo]=roadNo || '';
        this[_city]= city || '';
        this[_region]=region || '';
        this[_country]= country || '';
        this[_postalCode] = postalCode || '';
    }
    get id(){
        return this[_id];
    }
    get roadNo(){
        return this[_roadNo];
    }
    set roadNo(value) {
        this[roadNo]=value;
    }
    get city(){ 
        return this[_city];
    }
    set city(value) { 
        this[city]=value;
    }
    get region(){
        return this[_region];
    }
    set region(value) {
        this[region]=value;
    }
    get country(){
        return this[_country];
    }
    set country(value) {
        this[country]=value;
    }
    get postalCode(){
       return this[_postalCode];
    }
    set postalCode(value) {
        this[postalCode]=value;
    }
    toString(){
        return `
        Id :${this[_id]},
        RoadNo :${this[_roadNo]},
         City :${this[_city]},
        Region :${this[_region]},
        Country :${this[_country]},
        PostalCode :${this[_postalCode]}`
    }

}
module.exports =Address;