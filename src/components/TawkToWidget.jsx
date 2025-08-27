import React, { useState } from "react";
import { Bot, Send } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you with ProjectVault today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply = getBotReply(input);
    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);

    setInput("");
  };

  const getBotReply = (input) => {
    input = input.toLowerCase();
    if (input.includes("upload")) return "You can upload your project from the 'Add Project' page.";
    if (input.includes("view")) return "Go to the 'All Projects' section to view available projects.";
    if (input.includes("admin")) return "Only authorized users can access the admin panel.";
    return "Sorry, I didn't understand that. Try asking about 'upload', 'view', or 'admin'.";
  };

  return (
    <div className="fixed bottom-4 right-4 w-72 md:w-80 bg-white text-black shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-600 text-white p-3 font-bold flex items-center gap-2">
        <Bot size={20} /> ProjectVault Chatbot
      </div>
      <div className="p-3 h-64 overflow-y-auto text-sm bg-zinc-100">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-2 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-3 py-2 rounded ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex p-2 border-t bg-white">
        <input
          className="flex-1 p-2 border border-gray-300 rounded-l outline-none"
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded-r"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

