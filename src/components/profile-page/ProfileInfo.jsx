/* eslint-disable react/prop-types */
import React from 'react'
import zipcodes from 'zipcodes';
import { Grid, Typography } from '@material-ui/core';

function ProfileInfo({data}) {
  const location = zipcodes.lookup(data.zipcode)

  return (
    <Grid item container justify="flex-end" spacing={8} align="center">
      <Grid item>
        <Typography color="textSecondary" style={{paddingRight: "60px", borderRight: "2px solid black"}}>{data.email}</Typography>
      </Grid>
      <Grid item>
        <Typography color="textSecondary" style={{paddingRight: "60px", borderRight: "2px solid black"}}>{data.phone}</Typography>
      </Grid>
      <Grid item style={{marginRight: "40px"}}>
        {location ? <Typography color="textSecondary">{location.city}, {location.state}</Typography> : ''}
      </Grid>
    </Grid>
  )
}

export default ProfileInfo
