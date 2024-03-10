<script>
    export let data;
    const patient=data.patient;
</script>
<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <style>
        .blue_colour{
            background-color: #59D5E0;
        }
        #header{
            background-color: #59D5E0
        }
        .card-img-custom {
            height: 350px; /* Adjust the height as needed */
            
            width: 100%; /* Ensures responsiveness */
        }
    </style>
</svelte:head>
<section id = "navbar" class="blue_colour">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style="color: black;">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active text-dark" aria-current="page" href="./home">Home</a>
              <a class="nav-link active text-dark" href="./history">Notifications</a>
              <a class="nav-link active text-dark" href="./chat">AI chatbot</a>
              <a class="nav-link active text-dark" href="./setup?p=2">Patient Setup</a>
                <button on:click={allowNotifications}>Allow Notifications</button>
            </div>
          </div>
        </div>
      </nav>
    </section>

    
{#if patient}
    
<div>
<form>
    <p>Enter up to 3 things you want the hospital to know about {patient.name}</p>
    <div class="mb-3"><input class="form-control form-control-lg" type="text"></div>
    <div class="mb-3"><input class="form-control form-control-lg" type="text"></div>
    <div class="mb-3"><input class="form-control form-control-lg" type="text"></div>
</form>
</div>

{:else}
No patient found
{/if}