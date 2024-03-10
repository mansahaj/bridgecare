<script>
    export let data;
    const patient=data.patient;
</script>

{#if patient}
    
<div>
<form>
    <p>Enter up to 3 things you want the hospital to know about {patient.name}</p>
    <div class="mb-3"><input class="form-control form-control-lg" type="text"></div>
    <div class="mb-3"><input class="form-control form-control-lg" type="text"></div>
    <div class="mb-3"><input class="form-control form-control-lg" type="text"></div>
    <submit class="btn btn-info">Submit</submit>
</form>
</div>

{:else}
No patient found
{/if}