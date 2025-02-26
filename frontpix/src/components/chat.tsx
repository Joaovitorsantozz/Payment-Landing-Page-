import { faPhone, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
function Chat() {
  interface Message {
    text: string;
    sender: string;
  }
  const [isVisible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const toogleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: "me" }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const response = await axios.post("http://localhost:3000/ask", {
        question: userInput,
      });
      setMessages([
        ...newMessages,
        { text: response.data.answer, sender: "ai" },
      ]);
    } catch (error) {
      console.error("Erro ao buscar resposta da IA:", error);
      setMessages([
        ...newMessages,
        { text: "Erro ao obter resposta.", sender: "ai" },
      ]);
    }
  };
  return (
    <div>
      <div className="chat-box" onClick={toogleVisibility}>
        <FontAwesomeIcon className="icon" icon={faPhone} />
      </div>

      <div
        className="chat"
        style={{
          right: isVisible ? "30px" : "-420px", // Transição entre as posições
          transition: "right 0.3s ease-out", // Animação de transição
        }}
      >
        <div className="chat-header">
          <FontAwesomeIcon className="icon" icon={faHeadset} />
          <h2>Assistente Virtual</h2>
        </div>
        <div className="chat-container">
          <div className="chat-message-container">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-inputcontainer">
            <input
              type="text"
              className="userInput"
              placeholder="Escreva sua mensagem"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Enviar ao pressionar Enter
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
