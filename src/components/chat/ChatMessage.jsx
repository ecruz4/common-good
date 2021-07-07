/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import db from "../../db/firebase";
import UserContext from "../../contexts/UserContext";
import timeAgo from "../../utils/timeAgo";

const useStyles = makeStyles(() => ({
  message: {
    margin: "10px",
    minWidth: "auto",
    minHeight: "70px",
    alignSelf: "flex-start",
  },
  messageRight: {
    margin: "10px",
    minHeight: "70px",
    alignSelf: "flex-end",
  },
  sent: {
    background: "#2196f3",
    justify: "flex-end",
  },
  received: {
    background: "#ffed03",
  },
  invisible: {
    visibility: "hidden",
  },
}));

function ChatMessage({ message, otherUser }) {
  const { userInfo } = useContext(UserContext);

  const { text, uid, createdAt, recieverId } = message;
  const user = db.auth.currentUser;

  const classes = useStyles();

  let messageClass = "";

  if (!otherUser) {
    return null;
  }

  if (uid === user.uid && recieverId === otherUser.id) {
    messageClass = "sent";
    return (
      userInfo && (
        <Card className={classes.messageRight}>
          <CardContent className={classes[messageClass]}>
            <Typography variant="caption" color="textSecondary">
              {userInfo.name} • {timeAgo.format(createdAt.toDate(), "mini")}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </CardContent>
        </Card>
      )
    );
  }
  if (uid === otherUser.id) {
    messageClass = "received";
    return (
      userInfo && (
        <Card className={classes.message}>
          <CardContent className={classes[messageClass]}>
            <Typography variant="caption" color="textSecondary">
              {otherUser.name} • {timeAgo.format(createdAt.toDate(), "mini")}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </CardContent>
        </Card>
      )
    );
  }

  return null;
}

export default ChatMessage;
