import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../utils/context";
import MessageItem from "./MessageItem";

const MessageList = ({ socket }) => {
  const { messages } = useContext(AppContext);
  const [typing, setTyping] = useState({});
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setTyping("");
    }, 2000);
  }, [typing]);

  socket.off("typing").on("typing", (data) => {
    setTyping(data);
  });

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [typing]);
  console.log(messages);
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <MessageItem
          userName={msg.userName}
          key={msg.id}
          message={msg.data}
          align={msg.align}
        />
      ))}
      {typing && (
        <MessageItem
          userName={typing.username}
          align={typing.align}
          message={typing.text}
        />
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
