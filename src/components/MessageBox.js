import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ChatBubble from "./ChatBubble";

const MessageBox = (props) => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setMessage("");
    }
  };

  return (
    <div className="message-send-container">
      <ChatBubble userName={props.userName} />
      <TextField
        margin="normal"
        fullWidth
        id="messageBox"
        label="Message..."
        autoFocus
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        value={message}
        sx={{
          my: 3,
        }}
      />
    </div>
  );
};

export default MessageBox;
