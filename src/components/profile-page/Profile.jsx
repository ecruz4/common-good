/* eslint-disable no-unneeded-ternary */
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
  // Will receive "docs" prop from previous component. Docs will contain all necessary information needed to render profile:
  const location = useLocation();
  const { userId } = location.state;

  const user = {
    bio: "I'm doing this for the tax benefits.",
    city: "Cedar Park",
    email: "eacruz@live.com",
    name: "Eric Cruz",
    phone: "(123) 456-7890",
    state: "TX",
    zipcode: "78613",
    uid: "zZ6aQSz8AsThanjOPxQa2EIhbnB2",
    photo_url: "https://www.junkhappens.com/wp-content/uploads/2018/09/junk-removal-Brooklyn-Park-MN.jpg"
  }

  const { userInfo } = useContext(UserContext);

  return (
    <Grid container direction="column" justify="center" alignItems="stretch" style={{backgroundColor: "#7DA1FD"}}>
      <ProfileHeader data={user}
        edit={ user.uid === userInfo.uid ? true : false }
      />
      <ProfileBody data={user} />
    </Grid>
  )
}

export default Profile
