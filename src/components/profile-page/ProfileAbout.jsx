/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function ProfileAbout({data}) {

  return (
    <div style={{backgroundColor: "primary", height: "60vh"}}>
      {/* <p>Profile About</p>
      <span>{data.bio}</span> */}
      <Grid>
        <Typography>ABOUT:</Typography>
        <Typography>{data.bio}</Typography>
      </Grid>
    </div>
  )
}

export default ProfileAbout
