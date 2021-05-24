import React from 'react';
import ProfileAbout from './ProfileAbout';
import ProfileFeed from './ProfileFeed';
import { Grid } from '@material-ui/core';

const ProfileBody = ({user}) => {
  return (
    <div>
      <Grid container direction="column">
        <ProfileAbout user={user} />
        <ProfileFeed user={user} />
      </Grid>
    </div>
  )
}

export default ProfileBody
