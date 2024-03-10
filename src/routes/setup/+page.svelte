<script>
    export let data;
    const patient=data.patient;
</script>

{#if patient}
    

<form>
    Enter up to 3 things you want the hospital to know about {patient.name}
    <input type="text">
    <input type="text">
    <input type="text">
</form>

{:else}
No patient found
{/if}