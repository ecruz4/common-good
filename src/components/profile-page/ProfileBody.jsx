/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
import React from 'react';
import ProfileAbout from './ProfileAbout';
import ProfileFeed from './ProfileFeed';
import { Grid } from '@material-ui/core';

const ProfileBody = ({data}) => {
  return (
      <Grid container direction="row" alignItems="stretch">
        <Grid item xs={6} md={3} lg={2}>
          <ProfileAbout data={data} />
        </Grid>
        <Grid item xs={6} md={9} lg={10}>
          <ProfileFeed data={data} />
        </Grid>
      </Grid>
  )
}

export default ProfileBody
