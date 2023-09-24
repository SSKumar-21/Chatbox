const inputBox = document.querySelector('.input-box');
const chat = document.querySelector('.chat');


function sendMessage() {
    const userMessage = inputBox.value.trim();
    
    if (userMessage !== '') {
        displayMessage('You', userMessage); 
        inputBox.value = ''; 
        
        
        setTimeout(() => {
            const chatbotResponse = 'This is a chatbot response.';
            displayMessage('KIRO', chatbotResponse); 
        }, 1000); 
    }
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chat.appendChild(messageElement);
    
    
    chat.scrollTop = chat.scrollHeight;
}

document.querySelector('.btn').addEventListener('click', sendMessage);

inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});


window.addEventListener('load', () => {
    const welcomeMessage ="Hello there, I am KIRO, the AI created by SSkumar-21 to assist you. How can I help you today?";
    displayMessage('KIRO', welcomeMessage);
});
