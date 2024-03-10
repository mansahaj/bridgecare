<script>
    import { onMount } from 'svelte';

    onMount(()=>{

    });

function allowNotifications(){
    Notification.requestPermission().then((result) => {
        console.log(result);
    });

    // setInterval(()=>{
        const n = new Notification("test",{
            text:"You have a new health event",
            data:{
                url:"/history"
            }
        })
        n.addEventListener("click",ev=>{
            ev.preventDefault(); // prevent the browser from focusing the Notification's tab
            console.log(ev)
            window.location.href =ev.target.data.url;
        })
    // }, 2000);
}
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
          <a class="nav-link active text-dark" aria-current="page" href="#title">Home</a>
          <a class="nav-link active text-dark" href="./history">Notifications</a>
          <a class="nav-link active text-dark" href="./chat">AI chatbot</a>
        </div>
      </div>
    </div>
  </nav>
</section>

<sections id = "header">
<div class="container col-xxl-8 px-4 py-5 ">
    <div class="row flex-lg-row-reverse align-items-center g-5 pb-3">
      <div class="col-10 col-sm-8 col-lg-6"> 
        <img src="./logo.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">CareFlow</h1>
        <p class="lead">A website to automate caregiver to medical officials communication</p>
      </div>
    </div>
  </div>
</sections>

<section id = "body">
    <div class="container">
        <h1 class = "pb-5 text-center">Our Features</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-5 px-5 pb-4">
          <div class="col">
            <div class="card">
                <img src="./medical_notifications.jpg" class="card-img-top" alt="notficiation" height="336px">
                <div class="card-body">
                  <h5 class="card-title">Notification History</h5>
                  <p class="card-text">Check how the patient is doing</p>
                  <a href="./history" class="btn btn-primary">Access</a>
                </div>
              </div>
          </div>
          <div class="col">
            <div class="card" >
                <img src="./healthcare-chatbot.png" class="card-img-top img-fluid" alt="chatbot">
                <div class="card-body">
                  <h5 class="card-title">AI Chatbot</h5>
                  <p class="card-text">Talk to our AI chatbot</p>
                  <a href="./chat" class="btn btn-primary">Access</a>
                </div>
              </div>
          </div>    
</section>

<section>
    <button on:click={allowNotifications}>Allow Notifications</button>
</section>

<section id = "footer">

</section>



