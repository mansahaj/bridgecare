import { users } from "$lib/db.js";

export async function load({url}){
    const patientid=url.searchParams.get("p");
    
    const patient=users.find(u=>u.id==patientid);

    console.log(users,patientid,patient)
    return {
        patient
    };
}