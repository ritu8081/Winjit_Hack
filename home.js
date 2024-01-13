var savedConversations = [];

function submitQuery() {
    var userQuery = document.getElementById('user-query').value;
    var chatMessages = document.getElementById('chat-messages');

    // User query message
    var userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = '<span class="user-tag">User:</span> ' + userQuery;
    chatMessages.appendChild(userMessage);

    // Add loading indicator (simulating bot response delay)
    var loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = 'Typing...';
    chatMessages.appendChild(loadingIndicator);

    // Simulate delay before getting bot response
    setTimeout(function() {
        // Remove loading indicator
        chatMessages.removeChild(loadingIndicator);

        // Bot response message (simulate for now)
        var botResponse = document.createElement('div');
        botResponse.className = 'bot-response';
        botResponse.innerHTML = '<span class="bot-tag">RBI Bot:</span> ' + 'Here is the response to your query.';
        chatMessages.appendChild(botResponse);

        // Scroll to the bottom of the chat container to show the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1500); // Simulated delay of 1.5 seconds
}

function saveConversation() {
    var userQuery = document.getElementById('user-query').value;
    
    // Save the conversation (for simplicity, using an array)
    savedConversations.push(userQuery);

    // Inform the user
    alert('Conversation saved!');
}

function openFeedbackForm() {
    document.getElementById('feedback-form').style.display = 'block';
}

function submitFeedback() {
    var feedbackText = document.getElementById('feedback-text').value;
    // Implement logic to handle feedback (e.g., send data to a backend service)
    alert('Feedback submitted: ' + feedbackText);
    // Close the feedback form
    document.getElementById('feedback-form').style.display = 'none';
}

function viewSavedConversations() {
    var conversationsList = document.getElementById('conversations-list');
    conversationsList.innerHTML = '';

    if (savedConversations.length > 0) {
        savedConversations.forEach(function(conversation, index) {
            var listItem = document.createElement('li');
            listItem.innerHTML = '<span onclick="loadSavedConversation(' + index + ')">Conversation ' + (index + 1) + '</span>: ' + conversation;
            conversationsList.appendChild(listItem);
        });
        document.getElementById('saved-conversations').style.display = 'block';
    } else {
        alert('No saved conversations yet.');
    }
}

function loadSavedConversation(index) {
    // Load the saved conversation into the user query input
    document.getElementById('user-query').value = savedConversations[index];

    // Close the saved conversations section
    document.getElementById('saved-conversations').style.display = 'none';
}

function clearSavedConversations() {
    savedConversations = [];
    alert('Saved conversations cleared.');
}

function startNewConversation() {
    // Clear the user query input
    document.getElementById('user-query').value = '';
    
    // Inform the user
    alert('New conversation started!');
}
