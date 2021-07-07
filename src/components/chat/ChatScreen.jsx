import React, { useContext, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// PROPS PASSED FROM ROUTER
import { useLocation } from "react-router-dom";

import ChatRoom from "./ChatRoom";
import SignupButton from "../modals/SignupButton";
import UserContext from "../../contexts/UserContext";
import db from "../../db/firebase";

const useStyles = makeStyles(() => ({
  pageContainer: {
    paddingTop: "50px",
  },
}));

function ChatScreen() {
  const [otherUser, setOtherUser] = useState("");

  const location = useLocation();
  const { userId } = location.state;

  const { user } = useContext(UserContext);

  const classes = useStyles();

  useEffect(() => {
    if (user && userId && userId !== user.uid) {
      db.firestore
        .collection("users")
        .where("uid", "==", userId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log("doc", doc);
            setOtherUser({ id: doc.data().uid, name: doc.data().name });
          });
        })
        .catch((err) => console.error(err.message));
    }
  }, [userId, user]);

  useEffect(() => {
    if (user && userId && userId !== user.uid) {
      db.firestore
        .collection("organizations")
        .where("uid", "==", userId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log("doc", doc);
            setOtherUser({ id: doc.data().uid, name: doc.data().name });
          });
        })
        .catch((err) => console.error(err.message));
    }
  }, [userId, user]);

  return (
    <Container className={classes.pageContainer} maxWidth="md">
      <div>
        {user ? (
          <ChatRoom otherUser={otherUser} setOtherUser={setOtherUser} />
        ) : (
          <SignupButton />
        )}
      </div>
    </Container>
  );
}

export default ChatScreen;
