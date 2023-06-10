import React, { useContext } from "react";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { AppContext } from "../utils/context";
import { v4 as uuidv4 } from "uuid";

import MessageBox from "./MessageBox";
import MessageList from "./MessageList";
import ChatHeader from "./ChatHeader";

const Chat = ({ socket }) => {
  const { dispatch } = useContext(AppContext);

  //Listening to socket and adding message in context
  socket.off("message").on("message", (data) => {
    const datafromServer = {
      userName: data.username,
      id: uuidv4(),
      data: data.text,
      align: data.align,
    };

    dispatch({
      type: "ADD_MSG",
      payload: datafromServer,
    });
  });

  const params = useParams();
  return (
    <Container maxWidth="100%" sx={{ my: 0 }}>
      <Box
        sx={{
          my: 1,
          p: 3,
          border: "1px solid",
          borderRadius: "1em",
          borderColor: "#586171",
          height: "97vh",
        }}
      >
        <div className="chat-room">
          <ChatHeader userName={params.userName} roomName={params.roomName} />
          <MessageList socket={socket} />
          <MessageBox userName={params.userName} socket={socket} />
        </div>
      </Box>
    </Container>
  );
};

export default Chat;
