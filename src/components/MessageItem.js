import React from "react";
import { Typography } from "@mui/material";

const MessageItem = ({ userName, key, message, align }) => {
  console.log(userName);
  return (
    <div style={{ justifyContent: align }} className={`message-div-${align}`}>
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
