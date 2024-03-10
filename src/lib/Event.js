import { v4 } from uuid;

export class Event{
    constructor(e){
        this.id=e.id||v4();
        this.at=e.at||(new Date());
        this.patent=e.patient;
        this.type=e.type;
        this.description=e.description;
        this.viewed=e.viewed;
    }
}