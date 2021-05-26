/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useContext } from 'react';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import UserContext from '../../contexts/UserContext';

function ChatSidebar({ setOtherUser, otherUser, relevantMessages }) {
  const [contacts, setContacts] = useState([]);
  const [contactsIds, setContactsIds] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const { user, userInfo } = useContext(UserContext);

  const handleClick = (name, id, index) => {
    setSelectedIndex(index);
    setOtherUser({ name, id });
  };

  useEffect(() => {
    if (!userInfo) {
      return;
    }
    const tempNames = new Set();
    const tempIds = new Set();

    relevantMessages.forEach((msg) => {
      if (msg.uid !== user.uid) {
        tempNames.add(msg.user);
        tempIds.add(msg.uid);
      } else {
        tempNames.add(msg.recieverName);
        tempIds.add(msg.recieverId);
      }
    });
    if (otherUser && !tempNames.has(otherUser.name)) {
      console.log('No message history, adding sidebar tab');
      tempNames.add(otherUser.name);
      tempIds.add(otherUser.id);
    }
    setContacts([...tempNames]);
    setContactsIds([...tempIds]);
  }, [relevantMessages, user.uid, userInfo, otherUser]);

  return (
    <div>
      <List>
        {contacts.map((contact, index) => {
          let selected = false;
          if (selectedIndex === index || otherUser.name === contact) {
            selected = true;
          }
          return (
            <>
              <ListItem
                button
                selected={selected}
                onClick={() => handleClick(contact, contactsIds[index], index)}
              >
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon color="secondary" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact} />
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
