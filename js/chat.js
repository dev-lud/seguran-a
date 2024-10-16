document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();

    if (message) {
        displayMessage(message, 'user');
        getBotResponse(message);
        chatInput.value = '';
    }
}

function displayMessage(message, sender) {
    const chatWindow = document.getElementById('chat-window');
    const chatMessage = document.createElement('div');
    chatMessage.className = `chat-message ${sender}`;
    chatMessage.textContent = message;
    chatWindow.appendChild(chatMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'oi': 'Olá! Como posso ajudar você?',
        'como você está?': 'Estou bem, obrigado por perguntar!',
        'tchau': 'Até mais! Tenha um bom dia!'
    };

    const response = responses[message.toLowerCase()] || 'Desculpe, não entendi isso.';
    displayMessage(response, 'bot');
}
