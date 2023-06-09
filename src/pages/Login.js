import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../utils/context";
import { v4 as uuidv4 } from "uuid";

import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Login = ({ socket }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();
    var userName = document.getElementById("userName").value;
    var roomName = document.getElementById("roomName").value;

    socket.emit("joinRoom", { userName, roomName });

    const enteredMsg = {
      userName: userName,
      roomName: roomName,
      messages: [
        {
          id: uuidv4(),
          data: `Welcome ${userName}`,
          align: "center",
        },
      ],
    };

    dispatch({
      type: "ADD_USER_DETAILS",
      payload: enteredMsg,
    });

    navigate(`/chat/${roomName}/${userName}`);
  };

  return (
    <Container component="main" maxWidth="sm" color="">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome to Chat Groups !!
        </Typography>
        <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            autoFocus
            sx={{
              my: 3,
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Room name"
            id="roomName"
            sx={{
              my: 3,
            }}
          />
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="secondary"
            sx={{ my: 4 }}
          >
            Join Room
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
