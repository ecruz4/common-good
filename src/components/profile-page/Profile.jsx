/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useContext } from 'react';
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
  const user = {
    bio: "I'm doing this for the tax benefits.",
    city: "Cedar Park",
    email: "eacruz423@gmail.com",
    name: "Eric Cruz",
    phone: "(123) 456-7890",
    state: "TX",
    uid: "Qd4ys09fs0ZlnamitOKlMsNnIpW2",
    photo_url: "https://www.junkhappens.com/wp-content/uploads/2018/09/junk-removal-Brooklyn-Park-MN.jpg"
  }

  return (
    <Grid container direction="column" justify="center" alignItems="stretch" style={{backgroundColor: "#7DA1FD"}}>
      <ProfileHeader data={user} />
      <ProfileBody data={user} />
    </Grid>
  )
}

export default Profile
