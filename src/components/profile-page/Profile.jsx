/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-else-return */
/* eslint-disable func-names */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import ProfileHeader from "./ProfileHeader";
import db from "../../db/firebase";
import { Grid } from "@material-ui/core";
import ProfileBody from "./ProfileBody";

// PROPS PASSED FROM ROUTER
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

function Profile() {
  // Will receive "docs" prop from previous component. Docs will contain all necessary information needed to render profile:
  const location = useLocation();
  // Will need current userInfo to determine if profile is edit-able or not:
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [user, setUser] = useState(userInfo);

  useEffect(() => {
    if (location.state.type === "user") {
      db.firestore
        .collection("users")
        .where("uid", "==", location.state.userId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
        })
        .catch((err) => console.log(err.message));
    } else if (location.state.type === "charity") {
      db.firestore
        .collection("organizations")
        .where("uid", "==", location.state.userId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
          });
        })
        .catch((err) => console.log(err.message));
    }
  }, [location.state, userInfo]);

  const getEdit = function () {
    if (userInfo && userInfo.uid === location.state.userId) {
      return true;
    }
    return false;
  };

  const getType = function () {
    if (location.state.type === "user") {
      return true;
    } else {
      return false;
    }
  };
  // Pass the 'docs' prop to both components below:
  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      {user ? (
        <ProfileHeader
          data={user}
          edit={getEdit()}
          location={getType()}
          // Add an edit prop that gets sent to the header. If the currUser uid and the uid of the profile being viewed match, set this prop to true:
        />
      ) : null}
      {user ? (
        <ProfileBody data={user} edit={getEdit()} location={getType()} />
      ) : null}
    </Grid>
  );
}

export default Profile;

// if (!location.state && userInfo !== null) {
//   db.firestore.collection("users").where("uid", "==", userInfo.uid)
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       setUser(doc.data());
//     });
//   })
//   .catch((err) => console.log(err.message))
// } else if (userInfo === null && location.state) {
//   if (location.state.type === 'user') {
//     db.firestore.collection("users").where("uid", "==", location.state.userId)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//       });
//     })
//     .catch((err) => console.log(err.message));
//   } else {
//     db.firestore.collection("organizations").where("uid", "==", location.state.userId)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//       });
//     })
//     .catch((err) => console.log(err.message));
//   }
// } else if (location.state && userInfo !== null) {
//   if (location.state.type === "user") {
//     db.firestore.collection("users").where("uid", "==", location.state.userId)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//       });
//     })
//     .catch((err) => console.log(err.message));
//   } else {
//     db.firestore.collection("organizations").where("uid", "==", location.state.userId)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//       });
//     })
//     .catch((err) => console.log(err.message));
//   }
// }

// if (location.state && userInfo !== null) {
//   if (location.state.userId === userInfo.uid) {
//     return true
//   } else {
//     return false
//   }
// } else if (location.state && userInfo === null) {
//   return false
// } else {
//   return true;
// }
