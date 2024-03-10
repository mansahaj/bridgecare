import { Writable } from "svelte/store";
import { events, users } from "./db.js"
import { HealthEvent } from "./HealthEvent.js";

function updateStore(events,ev){
    events.update(eventArray=>{
        const existingIdx=eventArray.findIndex(e=>e.id==ev.id);

        if (existingIdx<0){
            //does not exist, add it
            eventArray.push(ev);
        } else {
            //exists update it
            eventArray[existingIdx]=ev;
        }
    })
}

export function saveHealthEvent(store,ev){
    updateStore(store,ev);
}

export async function getHealthEvents(user){
    const patients = users.filter(u=>user.caresFor.includes(u.id));
    const foundevents = events.filter(v=>user.caresFor.includes(v.patients));
    return foundevents.map(ev=>new HealthEvent({...ev,patient:patients.find(p=>p.id==ev.patient)}));
}