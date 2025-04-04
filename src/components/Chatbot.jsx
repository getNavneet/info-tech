import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { motion } from "framer-motion";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
        { sender: "bot", text: botResponse },
      ]);
    }, 1000);

    setInput("");
  };

  const getBotResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes("prize")) {
      return "Prizes vary per event. Please check the event details or contact the organizer!";
    } else if (lowerQuery.includes("attendance")) {
      return "Attendance is tracked during the event. Ensure you check in at the entrance.";
    } else if (lowerQuery.includes("sitting arrangement")) {
      return "Seats are allocated on a first-come, first-served basis unless specified otherwise.";
    } else {
      return "I'm not sure about that. Please contact support for more details!";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-80 bg-gray-900 text-white p-4 rounded-lg shadow-lg"
        >
          <div className="h-64 overflow-y-auto mb-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white p-2 rounded-lg"
                      : "bg-gray-700 p-2 rounded-lg"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 p-2 rounded bg-gray-800 text-white"
            />
            <button onClick={handleSend} className="bg-blue-500 p-2 rounded-full text-white">
              <IoMdSend size={20} />
            </button>
          </div>
        </motion.div>
      )}
      <button
        onClick={handleToggle}
        className="bg-orange-500 p-3 rounded-full shadow-lg text-white"
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
