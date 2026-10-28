const typing = document.getElementById("typing");
const btn = document.getElementById("btn");
const messages = document.getElementById("messages");

btn.addEventListener("click", function() {

    let text = typing.value;

    if (text == "") {
        return;
    }

    // User message
    let user = document.createElement("div");

    user.innerText = text;

    user.classList.add("user-message");

    messages.appendChild(user);


    // Bot message
    let bot = document.createElement("div");

    bot.innerText = "Thanks for your message!!!";

    bot.classList.add("bot-message");

    messages.appendChild(bot);


    // Clear input
    typing.value = "";

});






