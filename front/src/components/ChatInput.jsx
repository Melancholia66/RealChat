import React, { useState } from "react";

import { Grid, Fab, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [theme, setTheme] = useState("");

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0 && theme.length > 0) {
      handleSendMsg({ text: msg, title: theme });
      setMsg("");
      setTheme("");
    }
  };

  return (
    <Grid container sx={{ padding: "20px", backgroundColor: "#136164" }}>
      <Grid item xs={11}>
        <TextField
          size="small"
          label="Title"
          fullWidth
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          sx={{ backgroundColor: "#fffddbf7" }}
        />
        <TextField
          id="outlined-basic-email"
          label="Text messege"
          fullWidth
          value={msg}
          sx={{ mt: "7px", backgroundColor: "#fffddbf7" }}
          onChange={(e) => setMsg(e.target.value)}
        />
      </Grid>
      <Grid item xs={1} align="right">
        <Fab
          color="primary"
          onClick={(e) => {
            sendChat(e);
          }}
          aria-label="add"
          sx={{
            mt: 6,
            backgroundColor: "#f3656d",
            "&:hover": {
              backgroundColor: "#cf2b35",
            },
          }}
        >
          <SendIcon sx={{ color: "#fffddbf7" }} />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default ChatInput;
