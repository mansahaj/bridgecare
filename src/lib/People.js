export class User {
    constructor(u){
        this.id=u.id;
        this.login=u.login;
        this.name=u.name;
        this.caregivers=u.caregivers||[];
        this.caresFor=u.caringFor||[];
    }
}