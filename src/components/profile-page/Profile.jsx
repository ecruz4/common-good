/* eslint-disable func-names */
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

// To use context:
// In the file you want to access the value in,
// import React, { useContext } from 'react';
// import UserContext from '../../contexts/UserContext'; Or whatever the relative path is
// const { user } = useContext(UserContext);
// You can now use user like any other variable!


function Profile() {
  // Will receive "docs" prop from previous component. Docs will contain all necessary information needed to render profile:

  const user = {
    bio: "I'm doing this for the tax benefits.",
    city: "Cedar Park",
    email: "eacruz@live.com",
    name: "Eric Cruz",
    phone: "(123) 456-7890",
    state: "TX",
    zipcode: "78613",
    uid: "zZ6aQSz8AsThanjOPxQa2EIhbnB2",
    // photo_url: "https://www.junkhappens.com/wp-content/uploads/2018/09/junk-removal-Brooklyn-Park-MN.jpg"
    photo_url: "https://images.unsplash.com/photo-1556208738-7a57e7b96aed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80"
  }

  // Will need current userInfo to determine if profile is edit-able or not:
  const { userInfo } = useContext(UserContext);

  const handleEdit = function() {
    if (userInfo !== null) {
      if (userInfo.uid === user.uid) {
        return true
      }
    }
  return false
  }
  // Pass the 'docs' prop to both components below:
  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <ProfileHeader data={user} 
      // Add an edit prop that gets sent to the header. If the currUser uid and the uid of the profile being viewed match, set this prop to true:
        edit={handleEdit()}
      />
      <ProfileBody data={user} />
    </Grid>
  )
}

export default Profile
