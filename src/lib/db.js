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
        patient:2,
        type:"test type",
        description:"test description"
    }), new HealthEvent({
        patient:2,
        type:"test type",
        description:"test description"
    })
];