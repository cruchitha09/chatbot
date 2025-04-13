let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let noOfChatbotMsgs = chatbotMsgList.length;
let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");
let chatContainerEl = document.getElementById("chatContainer");

sendMsgBtnEl.onclick = function() {
    let msg = userInputEl.value;
    let tocontainer = document.createElement("div");
    tocontainer.classList.add("msg-to-chatbot-container");
    let text = document.createElement("p");
    text.classList.add("msg-to-chatbot");
    text.textContent = msg;
    tocontainer.appendChild(text);
    let fromcontainer = document.createElement("div");
    fromcontainer.classList.add("msg-from-chatbot-container");
    let reply = document.createElement("p");
    reply.classList.add("msg-from-chatbot");
    reply.textContent = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];
    fromcontainer.appendChild(reply);
    chatContainerEl.appendChild(tocontainer);
    chatContainerEl.appendChild(fromcontainer);
    userInputEl.value = "";

}
