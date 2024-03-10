import {User} from "./User.js"
import { HealthEvent } from "./HealthEvent.js";

export const users=[
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

export let events=[
     new HealthEvent({
        id:"2",
        patient:2,
        type:"MOVED",
        description:"Travis has been moved to a realistic-sounding place in the hospital"
    }),new HealthEvent({
        patient:2,
        type:"ADMITTED",
        description:"Travis has been admitted to Royal Jubilee Emergency"
    })
];