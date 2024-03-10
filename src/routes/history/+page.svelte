<script>
    import HealthEvent from './HealthEvent.svelte';
    export let data;
    
    $:healthevents=data.healthevents;
    $:eventId=data.selectedevent;
    
</script>

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <style>
        .blue_colour{
            background-color: #59D5E0;
        }
    </style>
</svelte:head>

<section id = "navbar" class="blue_colour">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active text-dark" aria-current="page" href="/">Home</a>
              <a class="nav-link active text-dark" href="./history">Notifications</a>
              <a class="nav-link active text-dark" href="./chat">AI chatbot</a>
            </div>
          </div>
        </div>
      </nav>
</section>

<section id = "heading">
    <h1 class="text-center py-5">Notification History</h1>
</section>

<div>
{#each healthevents as healthevent}
    <HealthEvent {healthevent} selected={healthevent.id==eventId}></HealthEvent>
{/each}
</div>