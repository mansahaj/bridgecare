<script>
import HealthEvent from './HealthEvent.svelte';
export let data;

$:healthevents=data.healthevents;

</script>

<div>
{#each healthevents as healthevent}
    <HealthEvent {healthevent}></HealthEvent>
{/each}
</div>