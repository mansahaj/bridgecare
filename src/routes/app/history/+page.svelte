<script>
    import HealthEvent from './HealthEvent.svelte';
    export let data;
    
    $:healthevents=data.healthevents;
    $:eventId=data.selectedevent;
    
</script>

<section id = "heading">
    <h1 class="text-center py-5">Notification History</h1>
</section>

<div>
{#each healthevents as healthevent}
    <HealthEvent {healthevent} selected={healthevent.id==eventId}></HealthEvent>
{/each}
</div>