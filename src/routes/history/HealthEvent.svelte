<script>
    export let healthevent;
    export let selected;

</script>
<style>
    .border_container{
        border: 2px solid#000;
        padding: 20px;
        margin: 10px;
    }
    .border_container--selected{
        border: 2px solid cornflowerblue;
        padding: 20px;
        margin: 10px;
    }
</style>
<div  class = "{selected?'border_container--selected':'border_container'}">
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