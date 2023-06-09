(function() {
  const app = document.querySelector(".app");
  const socket = lo();
  let uname = "Usuario";
  /*app
    .querySelector(".join-screen #join-user")
    .addEventListener("click", function() {
      let username = app.querySelector(".join-screen #username").value;
      if (username.length == 0) {
        return;
      }
      socket.emit("newuser", username);
      uname = username;
      app.querySelector(".join-screen").classList.remove("active");
      app.querySelector(".chat-screen").classList.add("active");
    });*/

  app
    .querySelector(".chat-screen #send-message").addEventListener("click", function() {
      let message = app.querySelector(".chat-screen #message-input").value;
      console.log(message);
      if (message.length == 0) {
        return;
      }
      renderMessage("my", {
        username: uname,
        text: message
      });
      socket.emit("chat", {
        username: uname,
        text: message
      });
      app.querySelector(".chat-screen #message-input").value = "";
    });


  function renderMessage(type, message) {
    let messageContainer = app.querySelector(".chat-screen .messages");
    if (type == "my") {
      let el = document.createElement("div");
      el.setAttribute("class", "message my-message");
      el.innerHTML = `
        <div>
          <div class="name">You</div>
          <div class="text">${message.text}</div>
        </div>
      `;
      messageContainer.appendChild(e1);
    } else if (type == "other") {
        let el = document.createElement("div");
        el.setAttribute("class", "message other-message");
        el.innerHTML = `
          <div>
            <div class="name">Invenzis</div>
            <div class="text">${message.text}</div>
          </div>
        `;
        messageContainer.appendChild(e1);
    } else if (type == "update") {
        let el = document.createElement("div");
        el.setAttribute("class", "update");
        el.innerText = message;
        messageContainer.appendChild(e1);
    }
    //scroll al final del chat
    messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
  }
})();
