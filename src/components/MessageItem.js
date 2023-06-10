import React from "react";
import ChatBubble from "./ChatBubble";
import { Typography } from "@mui/material";

const MessageItem = ({ userName, message, align }) => {
  return (
    <div style={{ justifyContent: align }} className={`message-div-${align}`}>
      {align === "left" && <ChatBubble userName={userName} />}
      <div className="message-body">
        {align === "left" && (
          <Typography component="div" className="name">
            {userName}
          </Typography>
        )}
        <Typography component="div" className="message">
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default MessageItem;
