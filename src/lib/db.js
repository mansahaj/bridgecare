import {User} from "./People"

export const people=[
    new User({
        id:1,
        name:"Audrey",
        caresFor:[2]
    }),
    new User({
        id:2,
        name:"Travis Kelce",
        caregivers:[1]
    })
];

let events=[

];

export async function loadEvents(){
    
}

export async function saveEvent(e){

}