/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileInfo from './ProfileInfo';
import { Grid } from '@material-ui/core';
import background from '../../assets/profileBackground.jpg';

function ProfileHeader({data}) {
  return (
    <div>
      <Grid container direction="column" justify="flex-start" alignItems="stretch">
        <Grid absolute item direction="row" style={{backgroundImage: `url(${background})`, height: "222px", }} >
          <Grid relative style={{position: "relative", top: "100px", left: "40px"}}>
            <ProfileAvatar data={data}/>
          </Grid>
        </Grid>
        <Grid container item alignItems="center" style={{backgroundColor: "#7DA1FD", height: "118px"}}>
          <Grid item xs={3} />
          <h1>{data.name}</h1>
          <ProfileInfo data={data} />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProfileHeader
