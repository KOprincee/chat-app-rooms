import { stringAvatar } from "../utils/stringAvatar";

import { Avatar, Tooltip } from "@mui/material";

const ChatAvatar = ({ userName }) => {
  return (
    <>
      {userName && (
        <Tooltip title={userName}>
          <Avatar {...stringAvatar(userName)} sx={{ cursor: "pointer" }} />
        </Tooltip>
      )}
    </>
  );
};

export default ChatAvatar;
