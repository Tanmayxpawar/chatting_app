import React, { useState, useEffect } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newMessage = {
      text: inputValue,
      timestamp: Date.now()
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
  }

  useEffect(() => {
    // Scroll to the bottom of the chat window whenever new messages are added
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chat">
      <div id="chat-window" className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-text">{message.text}</div>
            <div className="message-timestamp">{new Date(message.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;