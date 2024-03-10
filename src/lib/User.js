export class User {
    constructor({id, login, name, caregivers=[],caresFor=[]}){
        this.id=id;
        this.login=login;
        this.name=name;
        this.caregivers=caregivers||[];
        this.caresFor=caresFor||[];
    }
}