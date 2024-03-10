import { v4 } from uuid;

export class HealthEvent{
    constructor({id=v4(), at=(new Date()),patient, type, description,viewed}){
        this.id=id;
        this.at=at;
        this.patent=patient;
        this.type=type;
        this.description=description;
        this.viewed=viewed;
    }
}