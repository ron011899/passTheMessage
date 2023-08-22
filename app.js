const messageInput = document.getElementById('message-input');

messageInput.addEventListener('keydown', function(e){
    if (e.key == "Enter")
    getMessage();
    document.getElementById("message-output").style.margin = "20px";
})
function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
    document.getElementById("add-output-height").style.height = "220px";
}