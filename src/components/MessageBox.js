import React, { useContext, useState } from "react";
import { AppContext } from "../utils/context";
import { v4 as uuidv4 } from "uuid";

import TextField from "@mui/material/TextField";
import ChatBubble from "./ChatBubble";

const MessageBox = ({ socket, userName }) => {
  const { dispatch } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const handleKeyDown = (e) => {
    socket.emit("typing");

    if (e.key === "Enter") {
      const enteredMsg = {
        id: uuidv4(),
        data: message,
        align: "right",
      };

      socket.emit("chat", message);
      setMessage("");

      dispatch({
        type: "ADD_MSG",
        payload: enteredMsg,
      });
    }
  };

  return (
    <div className="message-send-container">
      <ChatBubble userName={userName} />
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
