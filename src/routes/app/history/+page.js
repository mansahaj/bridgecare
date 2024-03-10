import { getHealthEvents } from "$lib/HealthEventStore";

export async function load({url}){
    const healthevents = await getHealthEvents(1);
    const selectedevent=url.searchParams.get("evt");
    return {
        healthevents,
        selectedevent
    };
}