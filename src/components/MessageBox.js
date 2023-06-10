import React, { useContext, useState } from "react";
import { AppContext } from "../utils/context";
import { v4 as uuidv4 } from "uuid";

import TextField from "@mui/material/TextField";
import ChatBubble from "./ChatBubble";

const MessageBox = (props) => {
  const { dispatch } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const enteredMsg = {
        id: uuidv4(),
        data: message,
        align: "right",
      };

      setMessage("");

      dispatch({
        type: "ADD_MSG",
        payload: enteredMsg,
      });
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
