import { getHealthEvents } from "../../lib/HealthEventStore";

export async function load(){
    const healthevents = await getHealthEvents(1);
    return {
        healthevents
    };
}