import React, { useState, useEffect } from "react";
import speakGif2 from "./assests/speaking2.gif";

const Chatbot = () => {
  const URL = ""; //Add your server URL here (backend link)

  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [visibility, setVisibility] = useState("invisible");
  const [term, setTerm] = useState("Pause");

  const handleCancel = () => {
    window.speechSynthesis.cancel();
    setTerm("Pause");
  };
  const handlePause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    setChatHistory([...chatHistory, { sender: "user", message: userMessage }]);

    try {
      const response = await fetch(`${URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      const botMessage = data.response;
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", message: botMessage },
      ]);
      speak(botMessage);
    } catch (error) {
      console.error("Error:", error);
    }

    setUserMessage("");
  };
  const speak = (text) => {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.onstart = () => {
      setVisibility("visible");
    };
    speech.onend = () => {
      setVisibility("invisible");
      setTerm("Pause");
    };
    speech.onpause = () => {
      setVisibility("invisible");
      setTerm("Resume");
    };
    speech.onresume = () => {
      setVisibility("visible");
      setTerm("Pause");
    };
    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find(
      (voice) => voice.name === "Microsoft Mark - English (United States)"
    );
    window.speechSynthesis.speak(speech);
  };
  useEffect(() => {
    speak("Hello, hope you have a nice day!!");
  }, []);

  return (
    <div className="p-4 pt-14 max-w-2xl m-auto">
      <div className={`flex justify-center items-center ${visibility}`}>
        <img className="size-14" src={speakGif2} alt="" srcSet="" />
      </div>
      <div className="h-80 overflow-auto border-2 border-dashed border-teal-100 rounded-lg bg-slate-950 p-3">
        {chatHistory.map((chat, index) => (
          <div
            className="text-teal-200"
            key={index}
            style={{ textAlign: chat.sender === "user" ? "right" : "left" }}
          >
            <strong>{chat.sender === "user" ? "You" : "Bot"}:</strong>{" "}
            {chat.message}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="text-teal-200 rounded p-2 m-2 w-4/5 bg-slate-950 border-2 border-teal-100 focus:border-teal-50 focus:border-2"
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="btn px-3 py-2" onClick={sendMessage}>
          Send
        </button>
      </div>
      <button className="btn" onClick={handleCancel}>
        Stop speak
      </button>
      <button className="btn" onClick={handlePause}>
        {term} speak
      </button>
    </div>
  );
};

export default Chatbot;
