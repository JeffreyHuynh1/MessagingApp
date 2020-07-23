import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";

export const Message = forwardRef(({ message, username }, ref) => {
  //if the username being passed is the same as username for the message then this is set to true
  const isUser = username === message.username;
  return (
    // gives according style to messages associated with logged in user and other user,
    // logged in users messages are aligned on the right and blue, guest users are aligned right and white
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography
            className="message__content"
            color="white"
            variant="h5"
            component="h2"
          >
            {!isUser && `${message.username || "Unknown User"}:`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
