import React, { useContext } from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { yellow, lightBlue } from '@material-ui/core/colors';

import db from '../../db/firebase';
import UserContext from '../../contexts/UserContext';
import timeAgo from '../../utils/timeAgo';

const useStyles = makeStyles(() => ({
  message: {
    backgroundColor: yellow,
    margin: '10px',
  },
}));

function ChatMessage({ message }) {
  const { userInfo } = useContext(UserContext);
  const { text, uid, createdAt } = message;
  const user = db.auth.currentUser;
  const classes = useStyles();

  const messageClass = uid === user.uid ? 'sent' : 'received';

  return (
    userInfo && (
      <Box className={classes.message}>
        <div className={`message ${messageClass}`}>
          <Typography variant="overline">
            {userInfo.name} • {timeAgo.format(createdAt.toDate(), 'mini')}
          </Typography>
          <Typography variant="body1">{text}</Typography>
        </div>
      </Box>
    )
  );
}

export default ChatMessage;
