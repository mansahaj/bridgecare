<script>
    export let healthevent;


</script>
<style>
    .border_container{
        border: 2px solid#000;
        padding: 20px;
        margin: 10px;
    }
</style>
<div  class = "border_container">
    <div>
        <b>Ocurred At:</b> {healthevent.at}
    </div>
    <div>
        <b>For:</b> {healthevent.patient.name}
    </div>
    <div>
        <b>Event:</b> {healthevent.type}
    </div>
    <div>
        <b>Description:</b> {healthevent.description}
    </div>
</div>