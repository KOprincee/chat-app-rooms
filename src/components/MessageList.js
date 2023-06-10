import React, { useContext } from "react";
import { AppContext } from "../utils/context";
import MessageItem from "./MessageItem";

const MessageList = () => {
  const { messages, userName } = useContext(AppContext);

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <MessageItem
          userName={userName}
          key={msg.id}
          message={msg.data}
          align={msg.align}
        />
      ))}
    </div>
  );
};

export default MessageList;
