import React from "react";
import ChatBubble from "./ChatBubble";

const ChatHeader = ({ roomName, userName }) => {
  return (
    <div className="chat-header">
      {roomName}
      <ChatBubble userName={userName} />
    </div>
  );
};

export default ChatHeader;
