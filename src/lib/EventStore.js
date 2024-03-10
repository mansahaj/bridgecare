import { Writable } from "svelte/store";
import { loadEvents, saveEvent} from "./db.js"

function updateStore(events,event){
    events.update(eventArray=>{
        const existingIdx=eventArray.findIndex(e=>e.id==event.id);

        if (existingIdx<0){
            //does not exist, add it
            eventArray.push(event);
        } else {
            //exists update it
            eventArray[existingIdx]=event;
        }
    })
}

export function saveEvent(store,event){
    updateStore(store,event);
}

export async function getEvents({includeSeen}){

}