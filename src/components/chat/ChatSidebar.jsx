/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useContext } from 'react';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import db from '../../db/firebase';
import UserContext from '../../contexts/UserContext';

function ChatSidebar({ setOtherUser }) {
  const [relevantMessages, setRelevantMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [contactsIds, setContactsIds] = useState([]);
  const { user, userInfo } = useContext(UserContext);

  const messagesRef = db.firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const handleClick = (name, id) => {
    setOtherUser({ name, id });
  };

  useEffect(() => {
    if (messages) {
      setRelevantMessages(
        messages.filter(
          (msg) => msg.uid !== user.uid || msg.recieverId === user.uid
        )
      );
    }
  }, [messages, user.uid]);

  useEffect(() => {
    if (!userInfo) {
      return;
    }
    const tempNames = new Set();
    const tempIds = new Set();

    relevantMessages.forEach((msg) => {
      //   console.log(msg);
      if (msg.uid !== user.uid) {
        tempNames.add(msg.recieverName);
        tempIds.add(msg.recieverId);
      }
    });
    setContacts([...tempNames]);
    setContactsIds([...tempIds]);
  }, [relevantMessages, user.uid, userInfo]);

  return (
    <div>
      <List>
        {contacts.map((contact, index) => {
          console.log(contact);
          return (
            <>
              <ListItem button>
                <ListItemText
                  primary={contact}
                  onClick={() => handleClick(contact, contactsIds[index])}
                />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
}

export default ChatSidebar;
