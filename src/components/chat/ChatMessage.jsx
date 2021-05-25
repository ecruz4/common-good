/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import db from '../../db/firebase';
import UserContext from '../../contexts/UserContext';
import timeAgo from '../../utils/timeAgo';

const useStyles = makeStyles(() => ({
  message: {
    // backgroundColor: '#b3c2ce',
    margin: '10px',
  },
  sent: {
    background: 'red',
  },
  received: {
    background: 'blue',
  },
  invisible: {
    visibility: 'hidden',
  },
}));

function ChatMessage({ message }) {
  const { userInfo } = useContext(UserContext);
  const { text, uid, createdAt } = message;
  const user = db.auth.currentUser;
  const classes = useStyles();

  const otherUid = 'aVtjgriSnURzQsFSPLJrZfdSyXV2';
  const otherName = 'John Doe';

  let messageClass = '';

  if (uid === user.uid) {
    messageClass = 'sent';
  } else if (uid === otherUid) {
    messageClass = 'received';
  } else {
    return null;
  }

  console.log(uid);
  console.log(messageClass);

  return (
    userInfo && (
      <Card className={classes.message}>
        <CardContent className={classes[messageClass]}>
          <Typography variant="overline">
            {userInfo.name} • {timeAgo.format(createdAt.toDate(), 'mini')}
          </Typography>
          <Typography variant="body1">{text}</Typography>
        </CardContent>
      </Card>
    )
  );
}

export default ChatMessage;
