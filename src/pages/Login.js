import React from "react";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <>
      <TextField required id="outlined-required" label="UserName" />
      <TextField required id="outlined-required" label="RoomName" />
    </>
  );
};

export default Login;
