const widget = document.getElementById("chatWidget");
const toggle = document.getElementById("chatToggle");
const closeBtn = document.getElementById("closeChat");

closeBtn?.addEventListener("click", () => {

  widget.classList.add("hide");
  toggle.classList.add("show");

});

toggle?.addEventListener("click", () => {

  widget.classList.remove("hide");
  toggle.classList.remove("show");

});

const sendBtn = document.querySelector(".send");
const input = document.querySelector(".chat-footer input");
const chatBody = document.querySelector(".chat-body");

function addMessage(text, type) {

  const now = new Date();

  const div = document.createElement("div");

  div.className = `message ${type}`;

  div.innerHTML = `
    ${text}
    <div class="time">
      ${now.getHours()}:${String(
        now.getMinutes()
      ).padStart(2,"0")}
    </div>
  `;

  chatBody.appendChild(div);

  chatBody.scrollTop =
  chatBody.scrollHeight;
}

function showThinking() {

  const div = document.createElement("div");

  div.className = "typing";
  div.id = "typing";

  div.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  chatBody.appendChild(div);

  chatBody.scrollTop =
  chatBody.scrollHeight;
}

function hideThinking() {

  document
    .getElementById("typing")
    ?.remove();

}

async function sendMessage() {

  const message =
  input.value.trim();

  if (!message) return;

  addMessage(message, "user");

  input.value = "";

  showThinking();

  try {

    const response = await fetch(
      "Api/ChatBot/Chatbot.php",
      {
        method: "POST",
        headers: {
          "Content-Type":
          "application/json"
        },
        body: JSON.stringify({
          message
        })
      }
    );

    const data =
    await response.json();

    hideThinking();

    addMessage(
      data.reply,
      "bot"
    );

  } catch(error) {

    hideThinking();

    addMessage(
      "Không thể kết nối với máy chủ.",
      "bot"
    );

    console.error(error);
  }
}

sendBtn.addEventListener(
  "click",
  sendMessage
);

input.addEventListener(
  "keydown",
  e => {

    if(e.key === "Enter") {

      sendMessage();

    }

  }
);