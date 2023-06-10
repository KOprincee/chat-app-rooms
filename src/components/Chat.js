import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

import MessageBox from "./MessageBox";
import MessageList from "./MessageList";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  const params = useParams();
  console.log(params);
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
          <MessageList />
          <MessageBox userName={params.userName} />
        </div>
      </Box>
    </Container>
  );
};

export default Chat;
