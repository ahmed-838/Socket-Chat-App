let socket = io(); 
let myname = document.getElementById('myname'); 
let message = document.getElementById('message'); 
let messageArea = document.getElementById("messageArea"); 
let sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener("click", (e) => { 
    e.preventDefault(); 
    if (message.value) { 
        socket.emit('send name', myname.value); 
        socket.emit('send message', message.value); 
        message.value = ""; 
    } 
}); 

socket.on("send name", (username) => { 
    let name = document.createElement("p"); 
    name.textContent = username + ":"; 
    name.classList.add('message', 'received');
    messageArea.insertBefore(name, messageArea.firstChild);
}); 

socket.on("send message", (chat) => { 
    let chatContent = document.createElement("p"); 
    chatContent.textContent = chat; 
    chatContent.classList.add('message', 'sent');
    messageArea.insertBefore(chatContent, messageArea.firstChild);
});
