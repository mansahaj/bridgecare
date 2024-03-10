<style>
#chatbox {
    width: 500px; /* Increased from 300px to 400px */
    margin: auto;
    background: #f1f1f1;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#chatlogs {
    height: 400px; /* Increased from 200px to 300px */
    overflow-y: scroll;
    margin-bottom: 10px;
}

#chatlogs div {
    margin: 5px 0;
}

.user, .bot {
    padding: 5px;
    border-radius: 5px;
}

.user {
    background-color: #d2e2ff;
    align-self: flex-end;
}

.bot {
    background-color: #eee;
}

    </style>

    <script>
      function reply() {
        const userInput = document.getElementById('userInput').value;
        const chatlogs = document.getElementById('chatlogs');
    
        // Display user input
        const userDiv = document.createElement('div');
        userDiv.textContent = userInput;
        userDiv.classList.add('user');
        chatlogs.appendChild(userDiv);
    
        // Predefined responses
        const responses = {
            "I want to know where the blood donatinon room in Royal Jubilee Hospital is": "The blood donaation room ",
            "how are you": "I'm doing well, thank you!",
            "bye": "Goodbye! Have a great day!"
            // Add more predefined prompts and responses here
        };
    
        // Check for a response
        let botResponse = "Sorry, I don't understand that.";
        Object.keys(responses).forEach(key => {
            if (userInput.toLowerCase().includes(key)) {
                botResponse = responses[key];
            }
        });
    
        // Display bot response
        const botDiv = document.createElement('div');
        botDiv.textContent = botResponse;
        botDiv.classList.add('bot');
        chatlogs.appendChild(botDiv);
    
        // Clear input
        document.getElementById('userInput').value = '';
    }
    
    </script>

<section id = "heading">
    <h1 class="text-center p-5">Island Health Chatbot</h1>
</section>

<section id="chat_bot">
  <div id="chatbox">
    <div id="chatlogs">
        <!-- Chat logs will appear here -->
    </div>
    <input type="text" id="userInput" style="height: 35px;" placeholder="Ask me something...">
    <button onclick="reply()" class="btn btn-info" style="height: 35px;">Send</button>
</div>
</section>