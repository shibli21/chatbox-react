import React from "react";
import "./Input.css";

export const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="form">
      <input
        className="input"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </div>
  );
};
