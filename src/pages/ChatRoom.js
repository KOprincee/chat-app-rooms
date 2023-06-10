import React from "react";
import Chat from "../components/Chat";

const ChatRoom = ({ socket }) => {
  return <Chat socket={socket} />;
};

export default ChatRoom;
