/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import db from '../../db/firebase';
import UserContext from '../../contexts/UserContext';
import timeAgo from '../../utils/timeAgo';

const useStyles = makeStyles(() => ({
  message: {
    margin: '10px',
    minWidth: 'auto',
    minHeight: '70px',
    alignSelf: 'flex-start',
  },
  messageRight: {
    margin: '10px',
    minHeight: '70px',
    alignSelf: 'flex-end',
  },
  sent: {
    background: '#2196f3',
    justify: 'flex-end',
  },
  received: {
    background: '#ffff57',
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
    return (
      userInfo && (
        <Card className={classes.messageRight}>
          <CardContent className={classes[messageClass]}>
            <Typography variant="caption" color="textSecondary">
              {userInfo.name} • {timeAgo.format(createdAt.toDate(), 'mini')}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </CardContent>
        </Card>
      )
    );
  }
  if (uid === otherUid) {
    messageClass = 'received';
    return (
      userInfo && (
        <Card className={classes.message}>
          <CardContent className={classes[messageClass]}>
            <Typography variant="caption" color="textSecondary">
              {otherName} • {timeAgo.format(createdAt.toDate(), 'mini')}
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
