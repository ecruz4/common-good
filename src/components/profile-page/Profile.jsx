/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import ProfileAbout from './ProfileAbout';
import ProfileAvatar from './ProfileAvatar';
import ProfileFeed from './ProfileFeed';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import db from '../../db/firebase';
import { Grid } from '@material-ui/core';
import ProfileBody from './ProfileBody';

// PROPS PASSED FROM ROUTER
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!

function Profile() {
  const location = useLocation();
  const {userId, name, bio, focus, city, state} = location.state;
  const user = {
    bio: bio,
    city: city,
    email: "eacruz423@gmail.com",
    name: name,
    phone: "(123) 456-7890",
    state: state,
    uid: userId,
    photo_url: "https://www.junkhappens.com/wp-content/uploads/2018/09/junk-removal-Brooklyn-Park-MN.jpg"
  }
  const { currUser } = useContext(UserContext);
  console.log(currUser);

  // const [docs, setDocs] = useState([]);
  // const { userInfo } = useContext(UserContext);

  // useEffect(() => {
  //   const allDocs = [];
  //   db.firestore.collection("offers").where("donor_id", "==", 'mVYqsR5DJDbMoI51VlmZBrceX6Y2')
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         allDocs.push(doc.data());
  //       });
  //       setDocs(allDocs);
  //     })
  //     .catch((err) => console.log(err.message))
  // }, []);

  return (
    <Grid container direction="column" justify="center" alignItems="stretch" style={{backgroundColor: "#7DA1FD"}}>
      <ProfileHeader data={user} />
      <ProfileBody data={user} />
    </Grid>
  )
}

export default Profile
