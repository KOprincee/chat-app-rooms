import React, { useContext } from "react";
import { AppContext } from "../utils/context";

const MessageList = () => {
  const { messages } = useContext(AppContext);
  console.log(messages);
  return <div className="message-list"></div>;
};

export default MessageList;
