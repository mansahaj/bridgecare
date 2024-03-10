<script>
    export let healthevent;


</script>

<div>
    <div>
        <div>Ocurred At</div>
        <div>{healthevent.at}</div>
    </div>
    <div>
        for {healthevent.patient.name}
    </div>
    <div>
        <div>Event</div>
        <div>{healthevent.type}</div>
    </div>
    <div>
        {healthevent.description}
    </div>
</div>